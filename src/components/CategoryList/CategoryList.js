import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/productsMock";

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filterByCategory = (array) => {
      return array.map((item) => {
        if (item.category === category) {
          return setProducts(() => [...products, item]);
        }
      });
    };

    getProducts().then((response) => {
      filterByCategory(response);
    });
  }, [category]);

  return (
    <div className="general-container">
      <ItemList title={`${category}`} products={products} />
    </div>
  );
};

export default CategoryList;
