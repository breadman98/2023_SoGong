import React from "react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
