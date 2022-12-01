import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search, SPACING, VerticalLineTwo } from "../../constant";
import {
  CustomButton,
  CustomEditor,
  CustomInput,
  CustomContainer,
} from "../../components";

export const Create = () => {
  return (
    <>
      <div className="title">알고리즘 추가</div>
      <CustomContainer left={60} right={40}>
        <Item>
          <CustomEditor languages="java" />
        </Item>
        <Item>
          <CustomInput label="link">
            <Search />
          </CustomInput>
        </Item>
      </CustomContainer>
    </>
  );
};

const Item = styled.div`
  padding: ${SPACING.S};
`;
