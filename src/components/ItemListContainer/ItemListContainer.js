import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../utils/productsMock";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemList title={"Productos Destacados"} products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
