import MealItem from "../MeatItem/MealItem";
import styles from "./MealList.module.css";
import Card from "../../UI/Card/Card";
import { useCallback, useEffect, useState } from "react";

const MealList = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMenuList = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-http-af3fd-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Algo deu errado!");
      }

      const data = await response.json();
      const menuList = [];

      for (let obj in data) {
        menuList.push({ ...data[obj], id: obj });
      }
      setMenu(menuList);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMenuList();
  }, [getMenuList]);

  const meatList = menu.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card className={styles["meal-card"]}>
        <ul>{meatList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
