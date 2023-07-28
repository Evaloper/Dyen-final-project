import React from "react";
import { Header } from "../../organisms";

export const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};
