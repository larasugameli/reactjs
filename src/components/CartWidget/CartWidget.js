import "./CartWidget.css";

import CartContext from "../../context/CartContext";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 8,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0",
  },
}));

const CartWidget = () => {
  const { cartListItems, clearCart, reduceCart, cartItemsQuantity } =
    useContext(CartContext);
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
      <StyledBadge badgeContent={`${cartItemsQuantity()}`}></StyledBadge>{" "}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <div className="container-itemlistcard">
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
                  <p>{item.count}</p>
                </div>
                <div className="cart-action">
                  <button>
                    <DeleteIcon onClick={() => reduceCart(item.id)} />{" "}
                  </button>
                </div>
              </div>
            );
          })}

          {cartListItems.length !== 0 && (
            <div className="empezarAComprar">
              <div className="botones-carrito">
                <Button onClick={clearCart} style={{ color: "#fff" }}>
                  Vaciar Carrito
                </Button>
              </div>
              <div className="botones-carrito">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "#fff" }}>Check out</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
