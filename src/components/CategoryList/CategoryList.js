import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/productsMock";
import Loading from "../Loading/Loading";

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(
          category
            ? response.filter((prod) => prod.category === category)
            : response
        );
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="general-container">
          <ItemList title={`${category}`} products={products} />
        </div>
      )}
    </>
  );
};

export default CategoryList;
