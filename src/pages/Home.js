import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Tag from "../components/Tag";
import algorithmsService from "../services/algorithms.service";
import tagService from "../services/tag.service";

const Home = () => {
  const [items, setItems] = useState();
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState([
    {
      cd: 0,
      cdNm: "전체",
    },
  ]);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    algorithmsService.findAll(page, select).then((response) => {
      setItems(response.data);
    });
  }, [page, select]);

  useEffect(() => {
    let arr = [];
    tagService.findAll().then((response) => {
      response.data.map((value) => {
        arr.push({ cd: value.cd, cdNm: value.cd_nm });
      });
      setTags(tags.concat(arr));
    });
  }, []);

  const onPagination = () => {
    setPage(page + 1);
  };

  const onTags = (cd) => () => {
    setSelect(cd);
    setPage(1);
  };

  const isTags = () => {
    return tags.map((value) => (
      <Tag
        key={value.cd}
        name={value.cdNm}
        style={value.cd === select ? { backgroundColor: "#dbdbdb" } : null}
        onClick={onTags(value.cd)}
      />
    ));
  };

  const isItems = () => {
    return (
      items &&
      items.map((value, index) => (
        <Item last={index % 3 === 2} key={value.cd}>
          <Card
            title={value.title}
            scope={value.scope}
            tags={value.tags}
          ></Card>
        </Item>
      ))
    );
  };

  return (
    <>
      <Filter>
        <div>태그 목록</div>
        <div className="tags">{isTags()}</div>
      </Filter>
      <Container>{isItems()}</Container>
      <Pagination onClick={onPagination}>더보기</Pagination>
    </>
  );
};

export default Home;

const Filter = styled.div`
  margin-bottom: 12px;

  & > .tags {
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin-right: 5px;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(100% / 3 - 20px);
  margin: 0 20px 20px 0;
`;

const Pagination = styled.div`
  text-align: center;
  box-shadow: 0px 5px 5px 0px rgba(124, 124, 124, 0.3);
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
