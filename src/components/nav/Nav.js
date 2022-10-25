import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/home">홈</Link>
        </li>
        <li>
          <Link to="/guest">방명록</Link>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  height: 66px;

  & > ul {
    display: inline-block;
    vertical-align: top;
    padding: 0;
  }

  & ul li {
    list-style: none;
    float: left;
    padding: 0 52px 0 0;

    & > a {
      color: #777;
    }
  }
`;
