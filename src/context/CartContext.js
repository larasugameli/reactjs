import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      /*       console.log("se agrego el producto:", product);
       */
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
    setTotalPrice(totalPrice + product.price * product.count);
  };

  const reduceCart = (itemId) => {
    const itemToRemove = cartListItems.filter((item) => item.id !== itemId);
    setCartListItems(itemToRemove);
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
