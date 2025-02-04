import React from "react";
import Trabajo1 from "../../assets/galery-1.jpg";
import Trabajo2 from "../../assets/galery-2.jpg";
import Trabajo3 from "../../assets/galery-3.jpg";
import Trabajo4 from "../../assets/galery-4.jpg";

const Galery = () => {
  return (
    <>
      <div class="galery-trabajo">
        <h2>Nuestro trabajo</h2>
        <div className="container-trabajo">
          <div className="item-galery-trabajo">
            <img src={Trabajo1} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
          <div className="item-galery-trabajo">
            <img src={Trabajo2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Galery;
