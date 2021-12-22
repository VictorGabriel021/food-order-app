import styles from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button type="button" className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default HeaderButton;
