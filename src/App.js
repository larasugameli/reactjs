import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Empresas from "./pages/Empresas";
import Productos from "./pages/Productos";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import Carrito from "./pages/Carrito";
import NavBar from "./components/NavBar/NavBar";
import Categoria from "./pages/Categoria";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    //JSX
    <div className="navbar">
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/products/:category" element={<Categoria />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
