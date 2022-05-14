import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

//Funcional Component

const CardItem = ({ image, tittle, category, price }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`./${image}`} alt="logo" />
          </div>
          <p className="card-categoria">{category}</p>
          <p className="card-nombre">{tittle}</p>
          <span> {`$${price}`}</span>
          <div className="card-button">
            <Button style={{ color: "#FFF" }}>Agregar al Carrito</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
