import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const NotFound = () => {
  return (
    <div>
      {" "}
      <h2>404 - Pagina no encontrada</h2>
      <h3 className="">Nuestras recomendaciones para vos:</h3>
      <ItemListContainer />
    </div>
  );
};

export default NotFound;
