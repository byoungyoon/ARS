import React from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { cd } = useParams();

  return <div>{cd}</div>;
};

export default Detail;
