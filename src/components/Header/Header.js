import styles from "./Header.module.css";
import Meals from "../../assests/meals.jpg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button>
          <i className="fas fa-shopping-cart"></i>
          Your Cart
          <span>10</span>
        </Button>
      </header>
      <div className={styles["main-image"]}>
        <img src={Meals} alt="meal" />
      </div>
    </>
  );
};

export default Header;
