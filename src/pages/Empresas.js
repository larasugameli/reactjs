import { Container } from "@mui/material";

const Empresas = () => {
  return (
    <>
      <Container>
        <div>
          {" "}
          <h2>Empresas</h2>
          <div className="empresas-texto">
            <p>
              ¡Innová con tu regalo empresarial!
              <span>
                {" "}
                Tu marca permanentemente a la vista del público.
              </span>{" "}
              <br />
            </p>{" "}
            <p>
              {" "}
              Contactate a info.pgrab@gmail.com o escribinos al 11 2318-9465
              para pedir cotizaciones y muestras.
            </p>
          </div>
          <br />
          <img className="empresas" src="/empresas.png" alt="empresas"></img>
        </div>
      </Container>
    </>
  );
};

export default Empresas;
