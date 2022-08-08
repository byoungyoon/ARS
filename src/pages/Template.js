import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from "./Guest";
import Home from "./Home";
import Page404 from "./404";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Template = () => {
  return (
    <>
      <div className="line">
        <div className="inner">
          <Header />
        </div>
      </div>
      <div className="line">
        <div className="inner main">
          <Routes>
            <Route path="*" element={<Page404 />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/guest" element={<Guest />}></Route>
          </Routes>
        </div>
      </div>
      <div className="inner">
        <Footer />
      </div>
    </>
  );
};

export default Template;
