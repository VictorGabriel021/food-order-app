import styles from "./Header.module.css";
import Meals from "../../assests/meals.jpg";
import HeaderButton from "./Button/HeaderButton";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((acumulated, item) => {
    return acumulated + item.qtdItems;
  }, 0);

  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.showCart}>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          <span>Your Cart</span>
          <span className={styles.qtdItems}>{numberOfCartItems}</span>
        </HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={Meals} alt="meal" />
      </div>
    </>
  );
};

export default Header;
