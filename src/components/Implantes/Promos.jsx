import promoBuenFin3 from "../../assets/promo-nov-3.jpg";
import promoBuenFin4 from "../../assets/promo-nov-4.jpg";
const Promos = () => {
  return (
    <section className="promo-implantes">
      <h2 className="title-promo">Promos de Implantes</h2>
      <div className="promos-section">
        <a
          href="https://api.whatsapp.com/send?phone=525529484701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={promoBuenFin3} alt="" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=525529484701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={promoBuenFin4} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Promos;
