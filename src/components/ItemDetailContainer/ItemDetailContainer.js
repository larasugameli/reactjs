//Se va a encargar de hacer la llamada a la promesa
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//Firebase
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
       const getData = async () => {
         const docRef = doc(db, "productos", id);
         const docSnaptshop = await getDoc(docRef);
         let product = docSnaptshop.data();
         product.id = docSnaptshop.id;
         return product;
       };
    getData().then((prod) => {
      setProducto(prod);
    });
 
  }, [id]);

  return (
    <>
      <ItemDetail item={producto} />
    </>
  );
};

export default ItemDetailContainer;
