import CardItem from "../Card/Card";
import { Grid } from "@mui/material";

const CardList = () => {
  return (
    <>
      <h2 className="productos-destacados">Productos Destacados</h2>
      <Grid container>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"ClasicoNegro.png"}
            category="Basic"
            tittle="Clásico Negro"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Paltas.png"}
            category="Morfi"
            tittle="Paltas"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Homero.png"}
            category="Kids"
            tittle="Homero"
            price={400}
          />
        </Grid>
        <Grid item md={3} className="card-container">
          <CardItem
            image={"Patitas.png"}
            category="wild"
            tittle="Patitas"
            price={400}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CardList;
