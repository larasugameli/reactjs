import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    //JSX

    <div className="navbar">
      <NavBar />
      <div className="general-cointeiner">
        <CardList />
      </div>
    </div>
  );
}

export default App;
