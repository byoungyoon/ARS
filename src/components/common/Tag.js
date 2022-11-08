import React from "react";
import styled from "styled-components";
import { COLOR, FONT, SPACING } from "../../constant";

/**
 *
 * @param {string} name 태그 이름
 * @returns
 */
export const Tag = (props) => {
  const { name, ...prop } = props;

  return (
    <div>
      <Item {...prop}># {name}</Item>
    </div>
  );
};

const Item = styled.span`
  font-size: ${FONT.S};
  padding: ${SPACING.S};
  border-radius: 20%;
  border: 2px solid ${COLOR.GREY_HIGH};
  backgroun-color: ${COLOR.GREY_BASE};
  color: ${COLOR.BLACK_BASE};
`;
