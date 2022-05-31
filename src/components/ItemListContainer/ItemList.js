import { Grid } from "@mui/material";
import CardItem from "../CardItem/CardItem";

const ItemList = ({ title, products }) => {
  return (
    <>
      <h2 className="productos-destacados">{title}</h2>
      <Grid container>
        {products.map(
          ({ image, category, name, price, stock, id, initial }) => {
            return (
              <Grid item md={3} key={id}>
                <CardItem
                  image={image}
                  category={category}
                  name={name}
                  price={price}
                  stock={stock}
                  id={id}
                  initial={initial}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </>
  );
};

export default ItemList;
