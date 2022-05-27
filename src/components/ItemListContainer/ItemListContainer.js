import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../utils/productsMock";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => {});
  }, []);
  return (
    <div>
      <ItemList title={"Productos Destacados"} products={products} />
    </div>
  );
};

export default ItemListContainer;
