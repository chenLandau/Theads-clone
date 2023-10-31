import React from "react";
import { Outlet } from "react-router-dom";
// import main from "../assets/main.png";
import main from "../../assets/images/main.png";
import Wrapper from "../../assets/wrappers/LandingLayout";
const LandingLayout = () => {
  return (
    <Wrapper>
      <div className="container page">
        <img src={main} alt="" className="img main-img" />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default LandingLayout;
