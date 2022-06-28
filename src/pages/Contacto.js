import { Container, Button } from "@mui/material";

const Contacto = () => {
  return (
    <div>
      {" "}
      <Container>
        <h2>CONTACTO</h2>

        <form className="form">
          <div>
            <p className="empresas-texto">
              {" "}
              Dejanos tu mensaje para saber más y conocer nuestros descuentos a
              mayoristas.
            </p>
            <br />
          </div>
          <div class="camp">
            <label class="camp__label" for="name">
              Name
            </label>
            <input
              class="camp__field"
              type="text"
              placeholder="Your Name"
              id="name"
            />
          </div>

          <div class="camp">
            <label class="camp__label" for="email">
              E-Mail
            </label>
            <input
              class="camp__field"
              type="email"
              placeholder="Your email"
              id="email"
            />
          </div>

          <div className="camp">
            <label className="camp__label" for="mesagge">
              Mensaje
            </label>
            <textarea
              className="camp__field camp__field--textarea"
              id="mesagge"
            ></textarea>
          </div>
          <div className="boton-send">
            <Button style={{ color: "#FFF" }}>Send</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Contacto;
