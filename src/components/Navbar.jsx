import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);
  useEffect(() => {
    // Configurar smooth-scroll al cargar el componente
    new SmoothScroll('a[href*="#"]', {
      speed: 500,
      offset: 50, // Ajusta el desplazamiento si tienes un navbar fijo
    });
  }, []);

  return (
    <>
      <header>
        <div className="container-top">
          <div className="header-top">
            <div className="item-header-top">
              <p>Teléfono</p>
              <a
                href="tel:5529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                5535362504
              </a>
            </div>
            <div className="item-header-top whatsapp">
              <p>WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                5529484701
              </a>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="container-menu">
            <div className="container-logo">
              <img src={Logo} alt="Logo de Urban Sonríe" />
            </div>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <Link
                to="/"
                activeClass="active"
                spy
                smooth
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de inicio"
              >
                Inicio
              </Link>
              <a
                href="#nosotros"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Nosotros
              </a>

              <a
                href="#servicios"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Servicios
              </a>
              <Link
                to="/implantes"
                activeClass="active"
                spy
                smooth
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de servicios"
              >
                Implantes
              </Link>
              <a
                href="#promo"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Promociones
              </a>
              <a
                href="#ubicacion"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Ubicación
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                className="agendar menu-link nav-contacto"
                onClick={() => isOpenMenu(false)}
                rel="noopener noreferrer"
              >
                Agendar cita
              </a>
            </nav>
            <button
              className={`btn-menu ${openMenu ? "open" : ""}`}
              onClick={() => isOpenMenu(!openMenu)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
