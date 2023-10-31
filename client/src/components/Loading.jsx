import React from "react";
import { FaThreads } from "react-icons/fa6";
import Wrapper from "../assets/wrappers/Loading";

const Loading = () => {
  return (
    <Wrapper>
      <div className="page-center">
        <FaThreads className="icon" />
      </div>
    </Wrapper>
  );
};

export default Loading;
