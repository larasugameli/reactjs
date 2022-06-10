//Muestra la informacion de la pantalla de detalle
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [showButton, setShowbutton] = useState(false);
  const { addProductToCart } = useContext(CartContext);
  const { image, category, name, price, stock, initial, id } = item;

  function onAdd(count) {
    addProductToCart({
      image,
      category,
      name,
      price,
      stock,
      initial,
      id,
      count,
    });
    setShowbutton(true);
  }

  return (
    <div className="contenedor-detalle">
      <img src={item.image} alt="pgrab" />
      <div className="contendor-info">
        <p>
          Home > {item.category} >{" "}
          <span style={{ color: "#3cfce2" }}> {item.name} </span>
        </p>
        <div className="contenedor-nombreyprecio">
          <h2> {item.name}</h2>
          <span> {`$${item.price}`}</span>
        </div>
        {!showButton ? (
          <ItemCount
            stock={item.stock}
            initial={item.initial}
            onAdd={onAdd}
            setShowbutton={setShowbutton}
          />
        ) : (
          <div className="card-button">
            <Button>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#FFF" }}
                to="/cart"
              >
                {" "}
                Finalizar Compra{" "}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
