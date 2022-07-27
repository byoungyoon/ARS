import React from "react";
import styled from "styled-components";

const Footer = () => {
  const handleScroll = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Arrow onClick={handleScroll} />
      <Text>TEL. 010.5024.1910 / EMAIL. bur5698@naver.com</Text>
      <Text>© Byoungyoon</Text>
    </>
  );
};

export default Footer;

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

  background: #fff url("arrow-up2.svg") no-repeat 50% 50%;
  border: 1px solid #eee;
  border-radius: 50%;

  padding: 5px;
  cursor: pointer;
`;
