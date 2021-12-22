import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
