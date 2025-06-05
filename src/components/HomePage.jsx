import React from "react";
import HeroImage from "./HeroImage";
import Sidebar from "./Sidebar";





const HomePage = () => {
  return (
    <div class="wrapper">
      <div className="container">
        <div className="section1">
          <Sidebar />
          <HeroImage src="/IMG_6540.png" alt=""/>
        </div>
        <div className="section2">Section2</div>
      </div>
    </div>
  );
};

export default HomePage;
