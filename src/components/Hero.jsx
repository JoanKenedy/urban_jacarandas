import "../styles/hero.css";
import Foto1 from "../assets/promo-nov-cel-2.jpg";
import HeroMov from "../assets/promo-nov-cel-1.jpg";

import "../styles/modal.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={Foto1}
        alt="Fotografía principal del hero Urban Sonríe"
        className="img-escritorio"
        loading="eager"
      />
      <img
        src={HeroMov}
        alt="Fotografía principal del hero Urban Sonríe"
        className="img-mov"
        loading="eager"
      />
      {/* <div className='texto-hero'>
        <div className='container-texto-hero'>
          <h1>Urban Sonríe</h1>
          <p>Tu mejor opción para volver a sonreír</p>
        </div>
      </div> */}
    </div>
  );
};
export default Hero;
