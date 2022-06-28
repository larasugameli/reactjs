import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Carrusel from "../components/Carrusel/Carrusel";
const Home = () => {
  return (
    <>
      <Carrusel />
      <div className="general-cointeiner">
        <ItemListContainer title={"Productos Recomendados"} />
      </div>
    </>
  );
};

export default Home;
