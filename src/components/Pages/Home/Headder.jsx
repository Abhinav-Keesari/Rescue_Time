import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import "./Headder.css";
import JoinUsButton from "./JoinUs";


function Headder() {
  return (
    <>
      <div className="main2" itemID="content">
        <img src="./Logo.jpeg" alt="Logo"></img>
      </div>
      <div className="joinUs">
        <JoinUsButton />
      </div>
      <div className="scroll-down-button">
        <Link to="content" smooth={true} duration={500}>
        <div className="arrow"></div>
        <div className="arrow"></div>
        </Link>
      </div>
    </>
  );
}

export default Headder;