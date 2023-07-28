import React from "react";
import { Icon } from "../../atoms";
import "./index.scss";

export const IconText = ({ name, text, className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", marginTop: "25px" }}
    >
      <Icon name={name} className={className} />
      <span
        className={className}
        style={{ fontWeight: 400, marginLeft: "10px" }}
      >
        {text}
      </span>
    </div>
  );
};
