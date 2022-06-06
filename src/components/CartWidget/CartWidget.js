import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartListItems } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ShoppingCartIcon
        fontSize="large"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <div className="container-itemlistcard">
          {cartListItems.length === 0 && (
            <>
              <p> No hay productos en el carrito</p>

              <Link className="empezarAComprar" to="./productos">
                Empezar a comprar
              </Link>
            </>
          )}
          {cartListItems.map((item) => {
            return (
              <div className="item-cart" key={item.id}>
                <div className="cart-image">
                  <img
                    style={{ height: "150px" }}
                    src={item.image}
                    alt="prod carrito"
                  />
                </div>
                <div className="cart-info">
                  <p>{item.name}</p>
                  <span>${item.price}</span>
                </div>
                <div className="cart-action">
                  <button>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
