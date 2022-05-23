import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";

//Funcional Component

const CardItem = ({ image, category, name, price }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`./${image}`} alt="logo" />
          </div>
          <p className="card-categoria">{category}</p>
          <p className="card-nombre">{name}</p>
          <span> {`$${price}`}</span>
          <ItemCount />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
