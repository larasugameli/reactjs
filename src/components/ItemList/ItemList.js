// agrupador de un set de componentes item.js (incluirlo dentro del ItemListContener)
//promise-efecto de montje, 2 segundos

import CardItem from "../Card/Card";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const ItemList = ({ title }) => {
  const [products, setProducts] = useState([]);
  const productos = [
    {
      image: "ClasicoNegro.png",
      category: "Basic",
      name: "Clásico Negro",
      price: 400,
      stock: 20,
      id: 1,
    },
    {
      image: "Paltas.png",
      category: "Morfi",
      name: "Paltas",
      price: 400,
      stock: 15,
      id: 2,
    },
    {
      image: "Homero.png",
      category: "Kids",
      name: "Homero",
      price: 400,
      stock: 12,
      id: 3,
    },
    {
      image: "Patitas.png",
      category: "Wild",
      name: "Patitas",
      price: 400,
      stock: 10,
      id: 4,
    },
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <h2 className="productos-destacados">{title}</h2>
      <Grid container>
        {products.map(({ image, category, name, price, stock, id }) => {
          return (
            <Grid item md={3} key={id}>
              <CardItem
                image={image}
                category={category}
                name={name}
                price={price}
                stock={stock}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ItemList;
