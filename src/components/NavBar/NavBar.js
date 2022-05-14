import "./NavBar.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="navigator-bar">
        <AppBar
          className="header"
          position="static"
          style={{ backgroundColor: "#5e5e5e" }}
        >
          <Toolbar>
            <div className="logo">
              <img src="./logo1.png" alt="logo" />
            </div>
            <ul className="navigator">
              <li>
                <Button
                  disableRipple
                  variant="text"
                  className="navigator__link"
                >
                  Inicio
                </Button>
              </li>
              <li>
                <Button
                  disableRipple
                  variant="text"
                  className="navigator__link"
                >
                  Productos
                </Button>
              </li>
              <li>
                <Button
                  disableRipple
                  variant="text"
                  className="navigator__link"
                >
                  Empresas
                </Button>
              </li>
              <li>
                <Button
                  disableRipple
                  variant="text"
                  className="navigator__link"
                >
                  Contacto
                </Button>
              </li>
            </ul>
            <CartWidget />
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default NavBar;
