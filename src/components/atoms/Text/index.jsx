import React from "react";

export const Text = ({ type, className, children }) => {
  if (type === "p") {
    return <p className={className}>{children}</p>;
  }
  if (type === "h3") {
    return <h3 className={className}>{children}</h3>;
  }

  return <span className={className}>{children}</span>;
};
