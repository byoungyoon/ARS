import React from "react";
import styled from "styled-components";
import { COLOR, FONT, SIZE } from "../../constant";

export const CustomButton = (props) => {
  const { text, onClick, ...prop } = props;

  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  height: ${SIZE.M};

  cursor: pointer;
  font-size: ${FONT.S};
  background-color: ${COLOR.GREY_LOW};

  border: 1px solid ${COLOR.GREY_HIGH};
  border-radius: 10px;

  &:active {
    background-color: ${COLOR.GREY_BASE};
  }
`;
