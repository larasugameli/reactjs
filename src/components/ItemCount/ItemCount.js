import "./ItemCount.css";
import { Button } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restCount = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="count-item">
        <p className="count-cant">Cantidad:</p>

        <Button onClick={restCount} disabled={count === 0}>
          <KeyboardArrowDownIcon style={{ color: "#3cfce2" }} />
        </Button>
        <p>{count}</p>
        <Button onClick={addCount}>
          <AddCircleOutlineTwoToneIcon style={{ color: "#3cfce2" }} />
        </Button>
      </div>
      <div className="card-button">
        <Button
          onClick={() => {
            onAdd(count);
          }}
          style={{ color: "#FFF" }}
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
