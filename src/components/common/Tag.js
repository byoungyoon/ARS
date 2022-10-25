import React from "react";
import styled from "styled-components";

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
  font-size: 0.9em;
  padding: 7px;
  border-radius: 20%;
  border: 2px solid #d5d5d5;
  color: #aaaaaa;
  margin-top: 5px;
`;
