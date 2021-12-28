import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm/OrderForm";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const submitFormHandler = (userData) => {
    async function saveOrder() {
      try {
        setIsSubmitting(true);
        const response = await fetch(
          "https://react-http-af3fd-default-rtdb.firebaseio.com/orders.json",
          {
            method: "POST",
            body: JSON.stringify({
              userData: userData,
              orderItems: cartCtx.items,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Algum erro!");
        }
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
      } catch (err) {
        console.log(err.message);
      }
    }

    saveOrder();
  };

  const modalActions = (
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
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <OrderForm onSubmitForm={submitFormHandler} onCancel={props.hideCart} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.hideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal hideCart={props.hideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
