import React from "react";

const LoadingScreen = ({ logo }) => {
  return (
    <div className={"loading-screen"}>
      <img src={logo} />
    </div>
  );
};

export default LoadingScreen;
