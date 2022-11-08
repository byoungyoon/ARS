import React, { useEffect } from "react";
import { Header, Footer } from "../components";
import { element } from "../route";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import { COLOR, SPACING } from "../constant";

export const Template = () => {
  const routes = useRoutes(element);

  return (
    <>
      <Line>
        <Inner>
          <Header />
        </Inner>
      </Line>
      <Line>
        <Main>{routes}</Main>
      </Line>
      <Inner>
        <Footer />
      </Inner>
    </>
  );
};

const Line = styled.div`
  border-bottom: 1px solid ${COLOR.BLACK_LOW};
`;

const Inner = styled.div`
  width: 1080px;
  position: relative;
  margin: 0 auto;
`;

const Main = styled(Inner)`
  min-height: 600px;
  padding: ${SPACING.S};
`;
