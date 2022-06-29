import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrusel = () => {
  return (
    <Carousel>
      <div>
        <img src="banner1.jpeg" alt="banner1" />
        <p style={{ fontFamily: "Montserrat" }} className="legend">
          Simplemente cómodo
        </p>
      </div>
      <div>
        <img src="banner2.jpeg" alt="banner1" />
        <p style={{ fontFamily: "Montserrat" }} className="legend">
          Tu marca en manos de todos!
        </p>
      </div>
    </Carousel>
  );
};
export default Carrusel;
