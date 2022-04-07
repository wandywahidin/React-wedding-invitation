import React from "react";
import "./couple.css";
import Figure from "react-bootstrap/Figure";
import Gb from "../images/2.png";

const Couple = () => {
  return (
    <div className="heading" id="couple">
      <h1>
        We Are <br /> Getting Maried
      </h1>
      <br />
      <h3>بسم الله الرحمن الرحيم</h3>
      <h2>
        Assalamu'alaikum <br />
        Warahmatullohi Wabarakatuh <br />
        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
        Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
      </h2>
      <div className="text-center">
        <Figure>
          <Figure.Image width={171} height={180} alt="171" src={Gb} />
          <Figure.Caption>
            <h2>Tami Nurtami</h2>
            <h3>Putri Pertama dari Bapak Yayat(alm) dan Ibu Fulan</h3>
          </Figure.Caption>
        </Figure>
      </div>
      <div className="dan">
        <h1>- & -</h1>
      </div>
      <div>
        <div className="text-center">
          <Figure>
            <Figure.Image width={171} height={180} alt="171" src={Gb} />
            <Figure.Caption>
              <h2>Ruli Mutaqin</h2>
              <h3>Putra ke-2 dari Bapak Misbah(alm) dan Ibu Fulan</h3>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dee2e6"  d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,176C672,149,768,139,864,138.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default Couple;
