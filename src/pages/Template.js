import React from "react";
import { Header, Footer } from "../components";
import { element } from "../route";
import { useRoutes } from "react-router-dom";

export const Template = () => {
  const routes = useRoutes(element);

  return (
    <>
      <div className="line">
        <div className="inner">
          <Header />
        </div>
      </div>
      <div className="line">
        <div className="inner main">{routes}</div>
      </div>
      <div className="inner">
        <Footer />
      </div>
    </>
  );
};
