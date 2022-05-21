import CardItem from "../Card/Card";
import { Grid } from "@mui/material";

const ItemListContainer = ({ title, products }) => {
  return (
    <>
      <h2 className="productos-destacados">{title}</h2>
      <Grid container>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"ClasicoNegro.png"}
            category="Basic"
            name="Clásico Negro"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Paltas.png"}
            category="Morfi"
            name="Paltas"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Homero.png"}
            category="Kids"
            name="Homero"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Patitas.png"}
            category="wild"
            name="Patitas"
            price={400}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemListContainer;
