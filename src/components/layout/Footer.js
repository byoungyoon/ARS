import React from "react";
import styled from "styled-components";
import { ArrowUp } from "../../constant";

export const Footer = () => {
  const handleScroll = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Arrow onClick={handleScroll}>
        <ArrowUp />
      </Arrow>
      <Text>TEL. 010.5024.1910 / EMAIL. bur5698@naver.com</Text>
      <Text>© Byoungyoon</Text>
    </>
  );
};

const Text = styled.p`
  margin-bottom: 10px;
  font-size: 0.875em;
  color: #777;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 0;
  right: 0;

  border: 1px solid #d5d5d5;
  border-radius: 50%;

  padding: 5px;
  cursor: pointer;
`;
