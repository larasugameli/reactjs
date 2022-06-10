import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      console.log("se agrego el producto:", product);
      setTotalPrice(totalPrice + product.price * product.count);
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const reduceCart = (itemId) => {
    const itemToRemove = cartListItems.find((item) => item.id === itemId);
    let indexOfItem = cartListItems.indexOf(itemToRemove);
    cartListItems.splice(indexOfItem, 1);
    setCartListItems((cartListItems) => [...cartListItems]);
  };

  const clearCart = () => {
    setCartListItems([]);
  };

  const data = {
    cartListItems,
    addProductToCart,
    totalPrice,
    clearCart,
    reduceCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
