import React from "react";
import Headder from "./Home/Headder.jsx";
import Content from "./Home/content.js";
import Footer from "./Home/Footer.jsx";
export const Home = () => {
  return (
    <>
      <div>
        <Headder />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div> 
    </>
  );
};
