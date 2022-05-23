import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    //JSX
    <div className="navbar">
      <NavBar />
      <div className="general-cointeiner">
        <ItemListContainer title={"Productos Recomendados"} />
        {/*         <ItemListContainer title={"Todos nuestros Productos"} />
         */}{" "}
      </div>
    </div>
  );
}

export default App;
