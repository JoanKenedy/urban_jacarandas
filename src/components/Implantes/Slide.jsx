import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Foto1 from "../../assets/slider-1.jpg";
import Foto2 from "../../assets/slider-2.jpg";
import Foto3 from "../../assets/slider-3.jpg";
import Foto4 from "../../assets/celular-1.png";
import Foto5 from "../../assets/celular-2.png";
import Foto6 from "../../assets/celular-3.png";

const Slide = () => {
  return (
    <div className="container-slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Foto1} className="slider-compu" />
          <img src={Foto4} className="slider-cel" />
          <div className="texto ">
            <h2>Recupera tu sonrisa con implantes dentales</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Foto2} className="slider-compu" />
          <img src={Foto5} className="slider-cel" />
          <div className="texto">
            <h2>Implantología: tecnología para tu sonrisa</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Foto3} className="slider-compu" />
          <img src={Foto6} className="slider-cel" />
          <div className="texto">
            <h2>Dientes fijos, confianza plena</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
