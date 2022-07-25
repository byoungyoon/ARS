import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Guest from "./Guest";
import Home from "./Home";
import Page404 from "./404";

const Template = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/guest">Guest</Link>

      <Routes>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/guest" element={<Guest />}></Route>
      </Routes>
    </div>
  );
};

export default Template;
