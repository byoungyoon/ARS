import React from "react";
import { useParams } from "react-router-dom";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";

export const Detail = () => {
  const { cd } = useParams();

  const code = ``;

  const prettierConfig = { parser: "babel", plugins: [parserBabel] };

  return <pre>{prettier.format(code, prettierConfig)}</pre>;
};
