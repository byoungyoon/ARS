import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <div className="content"></div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  box-shadow: 0px 5px 5px 0px rgba(124, 124, 124, 0.3);
  border-radius: 8px 0 8px 0;
  height: 120px;
  background-color: #eaeaea;
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  & > .content {
    position: absolute;
    border-radius: 8px 0 8px 0;
    top: 10px;
    left: 10px;
    background-color: #fff;
    width: 60%;
    height: 100px;
  }
`;
