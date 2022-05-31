//Muestra la informacion de la pantalla de detalle
import "./ItemDetail.css";
import { Button } from "@mui/material";

const ItemDetail = ({ data }) => {
  return (
    <div className="contenedor-detalle">
      <img src={data.image} alt="pgrab" />
      <div className="contendor-info">
        <p>
          Home > {data.category} >{" "}
          <span style={{ color: "#3cfce2" }}> {data.name} </span>
        </p>
        <h2> {data.name}</h2>
        <span> {`$${data.price}`}</span>

        <form className="form">
          <input
            className="form__ok"
            type="number"
            placeholder="Cantidad"
            min="1"
          />
          <div className="card-button">
            <Button style={{ color: "#FFF" }}>Agregar al Carrito</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;
