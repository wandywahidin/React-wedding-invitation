import React from "react";
import "./home.css";
import NavbarComponents from "./NavbarComponents";
import Tes from "./Tes";

const Home = () => {
  return (
    <div className="home">
      <NavbarComponents />
      <div>
        <h3>The Wedding Of</h3>
        <h1>Ruli Mutaqin </h1>
        <h1>&</h1>
        <h1>Tami Nurtami</h1>
        <h2>-Sabtu, 22 Januari 2022-</h2>
      </div>
    </div>
  );
};

export default Home;
