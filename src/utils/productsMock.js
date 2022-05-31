export const productos = [
  {
    image: "/ClasicoNegro.png",
    category: "basic",
    name: "Clásico Negro",
    price: 400,
    stock: 20,
    id: 1,
    initial: 1,
  },
  {
    image: "/Paltas.png",
    category: "morfi",
    name: "Paltas",
    price: 400,
    stock: 15,
    id: 2,
    initial: 1,
  },
  {
    image: "/Homero.png",
    category: "kids",
    name: "Homero",
    price: 400,
    stock: 12,
    id: 3,
    initial: 1,
  },
  {
    image: "/Patitas.png",
    category: "wild",
    name: "Patitas",
    price: 400,
    stock: 10,
    id: 4,
    initial: 1,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1500);
  });
};

export default productos;
