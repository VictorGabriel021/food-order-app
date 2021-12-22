import styles from "./Header.module.css";
import Meals from "../../assests/meals.jpg";
import HeaderButton from "./Button/HeaderButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={() => {}}>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          <span>Your Cart</span>
          <span className={styles.qtdItems}>10</span>
        </HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={Meals} alt="meal" />
      </div>
    </>
  );
};

export default Header;
