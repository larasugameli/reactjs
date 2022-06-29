import { Container } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FormValidation from "../components/Form/FormValidation";

const Contacto = () => {
  return (
    <div>
      {" "}
      <Container>
        <h2>CONTACTO</h2>
        <div>
          <p className="empresas-texto">
            {" "}
            Dejanos tu mensaje para saber más y conocer nuestros descuentos a
            mayoristas.
          </p>
          <br />
        </div>

        <FormValidation />
        <div className="empresas-texto">
          <p>
            <LocalPhoneIcon /> 11 23189465
            <br />
            <EmailIcon /> info.pgrab@gmail.com
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contacto;
