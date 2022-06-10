import "./CardItem.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

//Funcional Component
const CardItem = ({ image, category, name, price, stock, initial, id }) => {
  const { addProductToCart, cartListItems } = useContext(CartContext);

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
    console.log(cartListItems);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={image} alt="logo" />
          </div>
          <p className="card-categoria">{category}</p>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/producto/${id}`}
          >
            {" "}
            <p className="card-nombre">{name} </p>{" "}
          </Link>
          <span> {`$${price}`}</span>
          <ItemCount onAdd={onAdd} stock={stock} initial={initial} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
