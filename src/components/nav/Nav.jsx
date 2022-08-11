import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" nav flex fixed gap-4 items-center bottom-8 ">
        <a
          id="menu"
          href="#header"
          onClick={() => setActiveNav("#header")}
          className={activeNav === "#header" ? "active" : ""}
        >
          <ImHome />
        </a>
        <a
          id="menu"
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaUserAlt />
        </a>
        <a
          id="menu"
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FaCode />{" "}
        </a>
        <a
          id="menu"
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <GrProjects />{" "}
        </a>
        <a
          id="menu"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <GrContact />
        </a>
      </div>
    </div>
  );
};

export default Nav;
