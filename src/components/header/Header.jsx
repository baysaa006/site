import React from "react";
import "./header.css";
import Cta from "./Cta";
import Pro from "./Pro";
import HeaderSocials from "../header/HeaderSocials";

const header = () => {
  return (
    <header id="header">
      <div className="container head_container h-screen relative pt-5">
        <div className="flex flex-col items-center">
          <h5>Hello I'm</h5>
          <h1 className="text-white">Munkhbaysgalan</h1>
          <h5 className="text-light">Developer</h5>
          <Cta />
        </div>

        <HeaderSocials />
        <Pro />

        <a href="#contact" className="scroll_down absolute ">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
