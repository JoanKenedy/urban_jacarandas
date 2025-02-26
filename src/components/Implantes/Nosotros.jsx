import React from "react";
import Foto from "../../assets/sonrisa.jpg";
import { IoLogoWhatsapp } from "react-icons/io";

const Nosotros = () => {
  return (
    <div className="about2">
      <div className="container-about-2">
        <div className="item-about-2">
          <h2>Implantología Dental</h2>
          <p>
            La implantología dental representa uno de los mayores avances en la
            odontología moderna, combinando ciencia, tecnología y arte para
            devolver la función y estética perdidas. Los implantes dentales no
            solo permiten reemplazar dientes ausentes, sino que también
            restauran la confianza y calidad de vida de los pacientes.
          </p>
          <p>
            Si perdiste una o más piezas dentales acude a Urban Sonrie para
            realizarte una Valoración a detalle y conocer la forma más eficaz de
            devolverte la confianza en tu sonrisa.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=525529484701"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            <IoLogoWhatsapp className="icon-whats" /> Agenda tu cita
          </a>
        </div>
        <div className="item-about-2">
          <img src={Foto} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
