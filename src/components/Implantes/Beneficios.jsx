import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const Beneficios = () => {
  // Array de preguntas y respuestas
  const preguntas = [
    {
      numero: 1,
      title: "Apariencia mejorada",
      answer:
        "Los implantes dentales se ven y se sienten como sus propios dientes. Y debido a que están diseñados para fusionarse con los huesos, se vuelven permanentes.",
    },
    {
      numero: 2,
      title: "Habla mejorada",
      answer:
        "Con dentaduras postizas mal ajustadas, los dientes pueden deslizarse dentro de la boca y hacer que usted balbucee o arrastre sus palabras. Los implantes dentales le permiten hablar sin la preocupación de que los dientes se resbalen.",
    },
    {
      numero: 3,
      title: "Mayor comodidad",
      answer:
        "Debido a que se vuelven parte de usted, los implantes eliminan la incomodidad de las dentaduras postizas removibles.",
    },
    {
      numero: 4,
      title: "Comer más fácil",
      answer:
        "Las dentaduras postizas deslizantes pueden dificultar la masticación. Los implantes dentales funcionan como sus propios dientes, lo que le permite comer sus alimentos favoritos con confianza y sin dolor.",
    },
    {
      numero: 5,
      title: "Autoestima mejorada",
      answer:
        "Los implantes dentales pueden devolverle su sonrisa y ayudarlo a sentirse mejor consigo mismo.",
    },
    {
      numero: 6,
      title: "Mejora de la salud bucal",
      answer:
        "Los implantes dentales no requieren la reducción de otros dientes, como lo hace un puente con soporte dental. Debido a que los dientes cercanos no se alteran para soportar el implante, se dejan intactos más dientes propios, lo que mejora la salud bucal a largo plazo.",
    },
    {
      numero: 7,
      title: "Durabilidad",
      answer:
        "Los implantes son muy duraderos y durarán muchos años. Con un buen cuidado, muchos implantes duran toda la vida.",
    },
    {
      numero: 8,
      title: "Conveniencia",
      answer:
        "Las dentaduras postizas removibles son solo eso; retirable. Los implantes dentales eliminan el embarazoso inconveniente de retirar las dentaduras postizas, así como la necesidad de utilizar adhesivos sucios para mantenerlas en su lugar.",
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <div className="seccion-ventajas-implantes">
        <h2>¿Cuáles son las ventajas de los implantes dentales?</h2>
        <p>
          ¿Te has preguntado cómo mejorar tu sonrisa y recuperar la confianza al
          comer, hablar y sonreír? <br />
          Los implantes dentales son una solución innovadora que no solo
          reemplaza dientes perdidos, sino que también mejora tu calidad de
          vida.
        </p>
        <div className="container-ventajas-implantes">
          <div className="item-ventajas">
            {/* Usamos .map() para iterar sobre el array de preguntas */}
            {preguntas.map((item, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-title"
                  onClick={() => toggleQuestion(index)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>
                    {item.numero}.- {item.title}
                    <FiPlusCircle />{" "}
                  </strong>
                </div>
                {openQuestion === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficios;
