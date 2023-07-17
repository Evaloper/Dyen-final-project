import React from "react";
import "./index.scss";

export const Logo = () => {
  return (
    <div className="logo flex align-centered">
      <div className="logo-img">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="logo-para">
        <p>Payhelper</p>
      </div>
    </div>
  );
};
