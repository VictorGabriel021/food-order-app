import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm/OrderForm";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, qtdItems: 1 });
  };

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const openFormHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.qtdItems}
          onRemove={removeHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && <OrderForm onCancel={props.hideCart} />}
      {!isCheckout && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.hideCart}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={openFormHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
