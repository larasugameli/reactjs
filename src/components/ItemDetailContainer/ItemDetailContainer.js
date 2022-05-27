//Se va a encargar de hacer la llamada a la promesa
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  producto1,
  producto2,
  producto3,
  producto4,
} from "../../utils/productsMock";

const ItemDetailContainer = () => {
  const [product1, setProduct1] = useState({});
  const [product2, setProduct2] = useState({});
  const [product3, setProduct3] = useState({});
  const [product4, setProduct4] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto1, producto2, producto3, producto4);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log("respuesta:", res);
      setProduct1(res);
      setProduct2(res);
      setProduct3(res);
      setProduct4(res);
    });
  }, []);

  return (
    <>
      <ItemDetail data={product1} />
      <ItemDetail data={product2} />
      <ItemDetail data={product3} />
      <ItemDetail data={product4} />
    </>
  );
};

export default ItemDetailContainer;
