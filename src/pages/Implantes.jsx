import Footer from "../components/Footer";
import Beneficios from "../components/Implantes/Beneficios";
import Galery from "../components/Implantes/Galery";
import About from "../components/Implantes/Nosotros";
import Question from "../components/Implantes/Question";
import Slider from "../components/Implantes/Slide";
import Navbar from "../components/Navbar";

const Implantes = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Beneficios />
      <Question />
      <Galery />
      <Footer />
    </div>
  );
};

export default Implantes;
