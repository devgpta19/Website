import React from "react";

import MidSection from "./MidSection";
import JobProfile from "./JobProfile";
import Interview from "./Interview";
import Form from "./Form";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HomeDEV from "./HomeDEV"


import Home from "./Home";

import Featured from "./Featured";
import JobDescription from "./JobDescription";

const CareersPage = () => {
  return (
    <div className=" bg-white">
      {/* home page */}
      {/* <HomeNav/> */}
      {/* <Home /> */}
      <HomeDEV />
      <Featured />
      <Footer />
      {/* careers  */}
      <HeroSection />
      <JobProfile />
      <MidSection />
      <Interview />
      <Footer />
      {/* job description */}
      <JobDescription />
      {/* form*/}
      <Form />
    </div>
  );
};

export default CareersPage;
