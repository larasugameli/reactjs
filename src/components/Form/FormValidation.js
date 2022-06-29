import "./FormValidation.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const customSubmit = (data) => {
    swal({
      title: "¡Gracias!",
      text: "Ya recibimos tu mensaje. Nos vamos a estar contando a la brevedad",
      icon: "success",
      button: "Aceptar",
      timer: "5000",
    });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(customSubmit)} className="form-react">
        <div className="form-control">
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre && <small className="fail">Ingrese su nombre</small>}
        </div>

        <div className="form-control">
          <label>Teléfono</label>
          <input
            type="number"
            {...register("telefono", {
              required: true,
            })}
          />
          {errors.telefono && (
            <small className="fail">Ingrese su teléfono</small>
          )}
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Ingrese su mail",
              },
            })}
          />
          {errors.email && (
            <small className="fail">{errors.email.message}</small>
          )}
        </div>

        <div className="form-control form-mensaje">
          <label>Mensaje</label>
          <input
            type="text"
            {...register("mensaje", {
              required: {
                value: true,
                message: "Ingrese su mensaje",
              },
            })}
          />
          {errors.mensaje && (
            <small className="fail">{errors.mensaje.message}</small>
          )}
        </div>

        <div className="form-control">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
