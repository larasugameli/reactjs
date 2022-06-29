import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Container } from "@mui/material";

import ItemList from "../ItemListContainer/ItemList";
import Loading from "../Loading/Loading";

//Firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
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

  const getData = async () => {
    const productSnapshot = await getDocs(collection(db, "productos"));
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Container>
            <div className="general-container">
              <ItemList title={`${category}`} products={products} />
            </div>
          </Container>{" "}
        </>
      )}
    </>
  );
};

export default CategoryList;
