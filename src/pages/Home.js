import React, { useEffect } from "react";
import algorithmsService from "../services/algorithms.service";

const Home = () => {
  useEffect(() => {
    algorithmsService.findAll().then((response) => {
      console.log(response);
    });
  }, []);

  return <div>Home</div>;
};

export default Home;
