import React, { useState } from "react";
import axios from "axios";
import { findClass, findTag, parserHtml } from "../../utils";
import { CustomEditor } from "../../components/common/CustomEditor";
import styled from "styled-components";
import { Input } from "../../components/common/Input";
import { Search, SPACING } from "../../constant";

const getHtml = async (link) => {
  try {
    return await axios.get(
      "https://school.programmers.co.kr/learn/courses/30/lessons/133500"
    );
  } catch (error) {
    console.error(error);
  }
};

export const Create = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const onChangeByLink = (e) => {
    setInput(e.target.value);
  };

  const onClickByLink = async () => {
    getHtml(input)
      .then((response) => response.data)
      .then((response) => {
        const html = parserHtml(response);

        const title = findClass(html, "algorithm-title")[0].textContent.trim();
        let example = { key: [], value: [] };

        const table = findClass(html, "table")[0];
        findTag(table, "th").map((key) => example.key.push(key.textContent));
        findTag(table, "td").map((key) => example.value.push(key.textContent));

        setData({
          title: title,
          example: example,
        });
      });
  };

  return (
    <>
      <div>알고리즘 추가</div>
      <Filter>
        <Input label="link">
          <Search />
        </Input>

        <button type="button" onClick={onClickByLink}>
          search
        </button>
      </Filter>
      <div>
        <CustomEditor languages="java" />
      </div>
    </>
  );
};

const Filter = styled.div`
  display: flex;
  margin-bottom: ${SPACING.S};

  & > div {
    flex-grow: 1;
  }

  & > button {
    flex-shrink: 0;

    margin-left: ${SPACING.S};
  }
`;
