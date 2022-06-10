import { useContext, useState } from "react";
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

const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext);
  const [subtotal, setTotalPrice] = useState(0);

  console.log("desde Cart", cartListItems);
  return (
    <>
      <h2> Carrito</h2>
      <Container>
        {cartListItems.length === 0 && (
          <>
            <p> No hay productos en el carrito</p>
            <Link className="empezarAComprar" to="./productos">
              Empezar a comprar
            </Link>
          </>
        )}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Precio Unitario</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">Quitar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartListItems.map((item) => {
                const { id, image, name, price, count } = item;
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
                    <TableCell align="right">{count}</TableCell>
                    <TableCell align="right">precio*cantidad </TableCell>
                    <TableCell align="right">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <p>
          Total:
          <span>${totalPrice}</span>{" "}
        </p>
        <Button>Continuar Comprando</Button>
        <Button>PAGAR</Button>
      </Container>
    </>
  );
};

export default Cart;
