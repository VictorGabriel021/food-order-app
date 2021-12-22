import styles from "./Meal.module.css";
import MealSummary from "./MealSummary/MealSummary";

const Meal = (props) => {
  return (
    <div className={styles.meal}>
      <MealSummary />
    </div>
  );
};

export default Meal;
