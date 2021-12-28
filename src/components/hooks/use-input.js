import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const hasError = !validate(enteredValue) && isTouched;
  const isValid = validate(enteredValue);

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid,
    enteredValueHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
