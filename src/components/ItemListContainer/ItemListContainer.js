import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";

//Firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

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
      {loading ? <Loading /> : <ItemList title={title} products={products} />}
    </>
  );
};

export default ItemListContainer;
