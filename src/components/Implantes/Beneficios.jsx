import React from "react";
import Foto from "../../assets/implantologo.jpg";

const Beneficios = () => {
  return (
    <>
      <div className="seccion-ventajas-implantes">
        <h2>¿Cuáles son las ventajas de los implantes dentales?</h2>
        <p>
          ¿Te has preguntado cómo mejorar tu sonrisa y recuperar la confianza al
          comer, hablar y sonreír?. <br />
          Los implantes dentales son una solución innovadora que no solo
          reemplaza dientes perdidos, sino que también mejora tu calidad de
          vida.
        </p>
        <div className="container-ventajas-implantes">
          <div className="item-ventajas">
            <ul>
              <li>
                <strong>Apariencia mejorada: </strong> Los implantes dentales se
                ven y se sienten como sus propios dientes. Y debido a que están
                diseñados para fusionarse con los huesos, se vuelven permanentes
              </li>
              <li>
                <strong>Habla mejorada: </strong> Con dentaduras postizas mal
                ajustadas, los dientes pueden deslizarse dentro de la boca y
                hacer que usted balbucee o arrastre sus palabras. Los implantes
                dentales le permiten hablar sin la preocupación de que los
                dientes se resbalen.
              </li>
              <li>
                {" "}
                <strong>Mayor comodidad:</strong> Debido a que se vuelven parte
                de usted, los implantes eliminan la incomodidad de las
                dentaduras postizas removibles.
              </li>
              <li>
                {" "}
                <strong>Comer más fácil:</strong> Las dentaduras postizas
                deslizantes pueden dificultar la masticación. Los implantes
                dentales funcionan como sus propios dientes, lo que le permite
                comer sus alimentos favoritos con confianza y sin dolor.
              </li>
            </ul>
          </div>
          <div className="item-ventajas">
            <ul>
              <li>
                {" "}
                <strong>Autoestima mejorada:</strong> Los implantes dentales
                pueden devolverle su sonrisa y ayudarlo a sentirse mejor consigo
                mismo.
              </li>
              <li>
                {" "}
                <strong>Mejora de la salud bucal:</strong> Los implantes
                dentales no requieren la reducción de otros dientes, como lo
                hace un puente con soporte dental. Debido a que los dientes
                cercanos no se alteran para soportar el implante, se dejan
                intactos más dientes propios, lo que mejora la salud bucal a
                largo plazo. Los implantes individuales también permiten un
                acceso más fácil entre los dientes, mejorando la higiene bucal.
              </li>
              <li>
                {" "}
                <strong>Durabilidad:</strong> Los implantes son muy duraderos y
                durarán muchos años. Con un buen cuidado, muchos implantes duran
                toda la vid
              </li>
              <li>
                {" "}
                <strong>Conveniencia:</strong> Las dentaduras postizas
                removibles son solo eso; retirable. Los implantes dentales
                eliminan el embarazoso inconveniente de retirar las dentaduras
                postizas, así como la necesidad de utilizar adhesivos sucios
                para mantenerlas en su lugar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficios;
