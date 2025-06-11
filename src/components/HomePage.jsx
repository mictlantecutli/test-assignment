import React from "react";
import HeroImage from "./HeroImage";
import Sidebar from "./Sidebar";
import Sidebar02 from "./SidebarSecc02";
import DescriptionBuild from "./DescBuild";





const HomePage = () => {
  return (
    <div class="wrapper">
      <div className="container">
        <div className="section1">
          <Sidebar />
          <HeroImage src="/IMG_6540.png" alt=""/>
        </div>
        <div className="section2">
          <DescriptionBuild /> 
          <Sidebar02 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
