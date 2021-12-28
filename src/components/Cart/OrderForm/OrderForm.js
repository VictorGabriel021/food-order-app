import useInput from "../../hooks/use-input";
import styles from "./OrderForm.module.css";

const OrderForm = (props) => {
  const {
    value: nameValue,
    hasError: nameError,
    isValid: nameIsValid,
    enteredValueHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: streetValue,
    hasError: streetError,
    isValid: streetIsValid,
    enteredValueHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalCodeValue,
    hasError: postalCodeError,
    isValid: postalCodeIsValid,
    enteredValueHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
  } = useInput((value) => value.trim() === 5);

  const {
    value: cityValue,
    hasError: cityError,
    isValid: cityIsValid,
    enteredValueHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const isError = (error) => {
    return error ? `${styles.control} ${styles.invalid}` : styles.control;
  };

  const nameErrorClass = isError(nameError);
  const streetErrorClass = isError(streetError);
  const postalCodeErrorClass = isError(postalCodeError);
  const cityErrorClass = isError(cityError);

  const confirmHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      nameReset();
      streetReset();
      postalCodeReset();
      cityReset();
    }
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameErrorClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <label>Name is Empty</label>}
      </div>
      <div className={streetErrorClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetError && <label>Name is Empty</label>}
      </div>
      <div className={postalCodeErrorClass}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCodeValue}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeError && <label>Name is Empty</label>}
      </div>
      <div className={cityErrorClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityError && <label>Name is Empty</label>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
