import React from "react";

export const Button = ({ className, text }) => {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
};
