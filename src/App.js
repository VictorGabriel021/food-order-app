import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meal from "./components/Meal/Meal";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
};

export default App;
