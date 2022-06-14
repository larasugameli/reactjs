import "./Cart.css";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Button } from "@mui/material";
import CartContext from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

const Cart = () => {
  const { cartListItems, totalCartPrice, reduceCart, changeQuantityOfProduct } =
    useContext(CartContext);

  console.log("desde Cart", cartListItems);

  return (
    <div className="carrito">
      <h2> Carrito</h2>
      <Container>
        {cartListItems.length === 0 && (
          <>
            <p> No hay productos en el carrito</p>
            <div className="botones-carrito">
              <Link style={{ textDecoration: "none" }} to="../../productos">
                {" "}
                <Button style={{ color: "#fff", fontWeight: 700 }}>
                  Empezar a comprar
                </Button>
              </Link>
            </div>
          </>
        )}

        {
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 700 }}>Producto</TableCell>
                  <TableCell style={{ fontWeight: 700 }} align="right">
                    Nombre
                  </TableCell>
                  <TableCell style={{ fontWeight: 700 }} align="right">
                    Precio Unitario
                  </TableCell>
                  <TableCell style={{ fontWeight: 700 }} align="center">
                    Cantidad
                  </TableCell>
                  <TableCell style={{ fontWeight: 700 }} align="right">
                    Subtotal
                  </TableCell>
                  <TableCell style={{ fontWeight: 700 }} align="right">
                    Quitar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartListItems.map((item) => {
                  const { id, image, name, price, count, stock } = item;

                  return (
                    <TableRow
                      key={id}
                      /*                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                       */
                    >
                      <TableCell>
                        <img
                          src={image}
                          style={{ maxWidth: "150px" }}
                          alt="miniatura"
                        />
                      </TableCell>
                      <TableCell align="right">{name}</TableCell>
                      <TableCell align="right">${price}</TableCell>
                      <TableCell align="center">
                        <Button
                          style={{ color: "#3cfce2" }}
                          className="button-quantity-control"
                          onClick={() => changeQuantityOfProduct(id, -1)}
                          disabled={count === 1}
                        >
                          <DoDisturbOnIcon />
                        </Button>{" "}
                        {count}{" "}
                        <Button
                          style={{ color: "#3cfce2" }}
                          className="button-quantity-control"
                          onClick={() => changeQuantityOfProduct(item.id, +1)}
                          disabled={stock <= count}
                        >
                          <AddCircleIcon />
                        </Button>
                      </TableCell>
                      <TableCell align="right">$ {price * count}</TableCell>
                      <TableCell align="right">
                        <DeleteIcon onClick={() => reduceCart(item.id)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        }
        <p style={{ fontWeight: 700 }}>
          Total:
          <span> ${totalCartPrice()} </span>{" "}
        </p>
        <div className="botones-carrito">
          <div className="boton-carrito">
            <Button style={{ color: "#FFF" }}>Continuar Comprando</Button>
          </div>
          <div className="boton-carrito">
            <Button style={{ color: "#FFF" }}>PAGAR</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
