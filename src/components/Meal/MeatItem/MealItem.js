import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  const price = props.price.toFixed(2);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (enteredAmout) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      qtdItems: enteredAmout,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <MealItemForm id={props.id} addToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
