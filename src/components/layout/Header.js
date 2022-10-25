import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../components";

export const Header = () => {
  return (
    <>
      <Title>
        <Link to="/">ARS</Link>
      </Title>
      <Nav />
    </>
  );
};

const Title = styled.div`
  padding: 23px 0;
  font-weight: 800;
  font-size: 1.75em;
  line-height: 32px;

  & > a {
    display: inline-block;
    height: 32px;
    color: #333;
  }
`;
