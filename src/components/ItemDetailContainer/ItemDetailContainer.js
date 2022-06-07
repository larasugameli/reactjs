//Se va a encargar de hacer la llamada a la promesa
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../../utils/productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productFilter = productos.find((product) => {
      return product.id === parseInt(id);
    });
    setProducto(productFilter);
  }, [id]);

  return (
    <>
      <ItemDetail item={producto} />
    </>
  );
};

export default ItemDetailContainer;
