import styles from "./Meal.module.css";
import MealList from "./MealList/MealList";
import MealSummary from "./MealSummary/MealSummary";

const Meal = () => {
  return (
    <div className={styles.meal}>
      <MealSummary />
      <MealList />
    </div>
  );
};

export default Meal;
