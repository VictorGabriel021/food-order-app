import { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmout = +amountInputRef.current.value;

    if (enteredAmout < 1 || enteredAmout > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.addToCart(enteredAmout);
  };

  return (
    <form className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
