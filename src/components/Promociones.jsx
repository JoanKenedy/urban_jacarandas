import promoBuenFin1 from "../assets/promo-nov-1.jpg";
import promoBuenFin2 from "../assets/promo-nov-2.jpg";
import promoBuenFin3 from "../assets/promo-nov-3.jpg";
import promoBuenFin4 from "../assets/promo-nov-4.jpg";
import promoBuenFin5 from "../assets/promo-nov-5.jpg";
import promoBuenFin6 from "../assets/promo-nov-6.jpg";

const Promociones = () => {
  return (
    <div>
      <div className="promo" id="promo">
        <div className="title">
          <h2>Promociones</h2>
        </div>
        <section className="promociones">
          <div className="container-promo">
            <img
              src={promoBuenFin1}
              alt="Promoción de blanqueamiento dental"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
          <div className="container-promo">
            <img
              src={promoBuenFin2}
              alt="Promoción de limpieza dental"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
          <div className="container-promo">
            <img
              src={promoBuenFin3}
              alt="Promoción extracción de muelas del juicio"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
          <div className="container-promo">
            <img
              src={promoBuenFin4}
              alt="Promoción extracción de muelas del juicio"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
          <div className="container-promo">
            <img
              src={promoBuenFin5}
              alt="Promoción extracción de muelas del juicio"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
          <div className="container-promo">
            <img
              src={promoBuenFin6}
              alt="Promoción extracción de muelas del juicio"
              className="promotion-img"
            />
            <a
              href="https://api.whatsapp.com/send?phone=525529484701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Promociones;
