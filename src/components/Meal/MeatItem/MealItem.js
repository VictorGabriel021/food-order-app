import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
