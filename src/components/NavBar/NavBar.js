import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["basic", "wild", "kids", "morfi"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="navigator-bar">
        <AppBar
          className="header"
          position="static"
          style={{ backgroundColor: "#5e5e5e" }}
        >
          <Toolbar>
            <Link to="/Home">
              <div className="logo">
                <img src="/logo1.png" alt="logo" />
              </div>
            </Link>

            <ul className="navigator">
              <li>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                    Inicio
                  </Button>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Productos">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onMouseEnter={handleClick}
                  >
                    Productos
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onMouseLeave={handleClose}
                  >
                    {categories.map((cat) => {
                      return (
                        <MenuItem
                          className="navigator__link"
                          onClick={handleClose}
                          key={cat}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              textTransform: "uppercase",
                              fontSize: "15px",
                              color: "#5e5e5e",
                            }}
                            to={`/products/${cat}`}
                          >
                            {cat}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Empresas">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                    Empresas
                  </Button>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Contacto">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                    Contacto
                  </Button>
                </Link>
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
