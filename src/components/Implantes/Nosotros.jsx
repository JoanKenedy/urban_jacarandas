import React from "react";
import Foto from "../../assets/implantologo.jpg";

const Nosotros = () => {
  return (
    <div className="about2">
      <div className="container-about-2">
        <div className="item-about-2">
          <h2>Implantología Dental: Ciencia al Servicio de Tu Sonrisa</h2>
          <p>
            La implantología dental representa uno de los mayores avances en la
            odontología moderna, combinando ciencia, tecnología y arte para
            devolver la función y estética perdidas. Los implantes dentales no
            solo permiten reemplazar dientes ausentes, sino que también
            restauran la confianza y calidad de vida de los pacientes. <br />{" "}
            Gracias a innovaciones como la planificación digital, los
            diagnósticos precisos y las técnicas mínimamente invasivas, la
            implantología se ha convertido en una opción segura y accesible para
            millones de personas en todo el mundo. Es más que un procedimiento
            médico; es una oportunidad para recuperar algo tan esencial como una
            sonrisa funcional y saludable. En definitiva, la implantología
            dental pone la ciencia al servicio de lo más valioso: tu bienestar y
            confianza.
          </p>
        </div>
        <div className="item-about-2">
          <img src={Foto} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
