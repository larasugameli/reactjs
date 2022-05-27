import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    //JSX
    <div className="navbar">
      <NavBar />
      <div className="general-cointeiner">
        <ItemListContainer title={"Productos Recomendados"} />
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
