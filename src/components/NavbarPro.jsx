import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logotipo-sonrix.png";
import "../styles/navbar.css";
import SmoothScroll from "smooth-scroll";
import { NavLink } from "react-router-dom";

const NavbarPro = () => {
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
        <div className="header-top">
          <div className="item-header-top">
            <p>Teléfono</p>
            <a href="tel:5529484701" target="_blank" rel="noopener noreferrer">
              5529484701
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
          <div className="urgencias item-header-top">
            <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urgencias Dentales
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
              <NavLink
                to="/"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de inicio"
              >
                Inicio
              </NavLink>
              <NavLink
                to="#nosotros"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de nosotros"
              >
                Nosotros
              </NavLink>
              <NavLink
                to="#servicios"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de servicios"
              >
                Servicios
              </NavLink>
              <NavLink
                to="/implantes"
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de servicios"
              >
                Implantes
              </NavLink>
              <Link
                to="#promo"
                activeClass="active"
                spy
                smooth
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de promociones"
              >
                Promociones
              </Link>
              <Link
                to="#ubicacion"
                activeClass="active"
                spy
                smooth
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de ubicación"
              >
                Ubicación
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                className="agendar menu-link nav-contacto"
                onClick={() => isOpenMenu(false)}
                rel="noopener noreferrer"
              >
                Agendar cita
              </a>
              <div className="btn-urgencias">
                <a
                  href="https://api.whatsapp.com/send?phone=525529484701"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Urgencias Dentales
                </a>
              </div>
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

export default NavbarPro;
