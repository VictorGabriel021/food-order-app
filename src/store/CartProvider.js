import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartValue = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.qtdItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItemsCart;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qtdItems: existingCartItem.qtdItems + action.item.qtdItems,
      };
      updatedItemsCart = [...state.items];
      updatedItemsCart[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemsCart = state.items.concat(action.item);
    }
    return {
      items: updatedItemsCart,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    //return [...state, action.item];
  }
  return defaultCartValue;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartValue
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
