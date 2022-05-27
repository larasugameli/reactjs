import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
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
    <div>
      <ItemList title={"Productos Destacados"} products={products} />
    </div>
  );
};

export default ItemListContainer;
