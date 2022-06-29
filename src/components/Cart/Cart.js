import "./Cart.css";

import CartContext from "../../context/CartContext";
import Modal from "../Modal/Modal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import TextField from "@mui/material/TextField";

import db from "../../utils/firebaseConfig";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Container, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartListItems,
    totalCartPrice,
    reduceCart,
    changeQuantityOfProduct,
    clearCart,
  } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
      };
    }),
    total: totalCartPrice(),
  });

  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const terminarOrden = () => {
    navigate("/");
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
    clearCart();
  };

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
                          onClick={() => changeQuantityOfProduct(id, -1)}
                          disabled={count === 1}
                        >
                          <DoDisturbOnIcon />
                        </Button>{" "}
                        {count}{" "}
                        <Button
                          style={{ color: "#3cfce2" }}
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

        <div className="botones-checkout">
          <div className="boton-carrito">
            <Link style={{ textDecoration: "none" }} to="../../productos">
              <Button style={{ color: "#FFF" }}>Continuar Comprando</Button>{" "}
            </Link>
          </div>
          <div className="boton-carrito">
            <Button
              style={{ color: "#FFF" }}
              onClick={() => setShowModal(true)}
            >
              Terminar Compra
            </Button>
          </div>
        </div>

        <Modal
          title={success ? "Muchas Gracias!" : "Formulario de compra"}
          open={showModal}
          handleClose={() => setShowModal(false)}
        >
          {success ? (
            <div>
              Ya estamos produciendo tu pedido!
              <br />
              <span> El código de tu orden es: {success} </span>
              <button
                className="boton-modal"
                style={{ color: "#fff", stylefontWeight: 700 }}
                onClick={terminarOrden}
              >
                Aceptar
              </button>
            </div>
          ) : (
            <form className="form-contact" onSubmit={handleSubmit}>
              <TextField
                style={{ padding: "8px" }}
                required
                id="outlined-basic"
                name="name"
                label="Nombre y Apellido"
                variant="filled"
                value={formValue.name}
                onChange={handleChange}
              />
              <TextField
                style={{ padding: "8px" }}
                required
                id="outlined-basic"
                name="phone"
                label="Telefono"
                variant="filled"
                value={formValue.phone}
                onChange={handleChange}
                type="number"
              />
              <TextField
                style={{ padding: "8px" }}
                required
                id="outlined-basic"
                name="email"
                label="Mail"
                value={formValue.email}
                variant="filled"
                onChange={handleChange}
                type="email"
              />
              <div>
                {" "}
                <button className="boton-modal" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default Cart;
