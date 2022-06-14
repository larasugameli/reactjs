import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [changeQuantity, setChangeQuantity] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      /*       console.log("se agrego el producto:", product);
       */
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const cartItemsQuantity = () => {
    return cartListItems.reduce((acc, item) => acc + item.count, 0);
  };

  const totalCartPrice = () => {
    return cartListItems.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
  };

  const reduceCart = (itemId) => {
    const itemToRemove = cartListItems.filter((item) => item.id !== itemId);
    setCartListItems(itemToRemove);
  };

  const changeQuantityOfProduct = (itemId, value) => {
    const itemToReduceQuantity = cartListItems.find(
      (item) => item.id === itemId
    );
    itemToReduceQuantity.count = itemToReduceQuantity.count + value;
    return setChangeQuantity(changeQuantity + value);
  };

  const clearCart = () => {
    setCartListItems([]);
  };

  const data = {
    cartListItems,
    addProductToCart,
    clearCart,
    reduceCart,
    totalCartPrice,
    changeQuantityOfProduct,
    cartItemsQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
