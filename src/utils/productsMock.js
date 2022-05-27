export const productos = [
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

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1500);
  });
};

const producto1 = {
  image: "ClasicoNegro.png",
  category: "Basic",
  name: "Clásico Negro",
  price: 400,
  stock: 20,
  id: 1,
};

const producto2 = {
  image: "Paltas.png",
  category: "Morfi",
  name: "Paltas",
  price: 400,
  stock: 15,
  id: 2,
};
const producto3 = {
  image: "Homero.png",
  category: "Kids",
  name: "Homero",
  price: 400,
  stock: 12,
  id: 3,
};
const producto4 = {
  image: "Patitas.png",
  category: "Wild",
  name: "Patitas",
  price: 400,
  stock: 10,
  id: 4,
};

export default productos;
export { producto1, producto2, producto3, producto4 };
