import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addProductToCart = (product) => {
    console.log("se agrego el producto:", product);

    let isInCart = cartListItems.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const reduceCart = (product) => {
    setCartListItems({
      ...cartListItems,
      cartListItems: cartListItems.filter((items) => items.id !== product.id),
    });
  };

  const clearCart = () => {
    cartListItems.length = 0;
  };

  const data = {
    cartListItems,
    addProductToCart,
    clearCart,
    reduceCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
