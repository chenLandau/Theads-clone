import React from "react";
import { FaSquareThreads } from "react-icons/fa6";
import Wrapper from "../../assets/wrappers/LandingPage.js";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <div className="container main-container">
        <FaSquareThreads className="icon" />
        <h1>
          Join <span>Threads </span>today
        </h1>
        <p>See what's happening in the world right now</p>
        <div className="links-container">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Create account
          </Link>
          <Link to="/threads" className="btn">
            Explore the app
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
