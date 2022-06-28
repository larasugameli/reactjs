import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Productos = () => {
  return (
    <div>
      {" "}
      <Container fixed>
        <ItemListContainer title={"Todos nuestros diseños"} />
      </Container>
    </div>
  );
};

export default Productos;
