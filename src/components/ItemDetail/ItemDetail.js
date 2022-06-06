//Muestra la informacion de la pantalla de detalle
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ItemDetail = ({ data }) => {
  const [showButton, setShowbutton] = useState(false);

  function onAdd(count) {
    console.log(`Agregaste ${count} al carrito`);
    setShowbutton(true);
  }

  return (
    <div className="contenedor-detalle">
      <img src={data.image} alt="pgrab" />
      <div className="contendor-info">
        <p>
          Home > {data.category} >{" "}
          <span style={{ color: "#3cfce2" }}> {data.name} </span>
        </p>
        <div className="contenedor-nombreyprecio">
          <h2> {data.name}</h2>
          <span> {`$${data.price}`}</span>
        </div>
        {!showButton ? (
          <ItemCount
            stock={data.stock}
            initial={data.initial}
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
