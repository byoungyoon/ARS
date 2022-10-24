import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Tag from "../components/Tag";
import algorithmsService from "../services/algorithms.service";
import tagService from "../services/tag.service";

const Home = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState({
    count: 0,
    rows: [],
  });
  const [tags, setTags] = useState([
    {
      cd: 0,
      cd_nm: "전체",
    },
  ]);
  const [select, setSelect] = useState(0);

  const findBlocks = useCallback(
    () =>
      algorithmsService.findAll(page, select).then((response) => response.data),
    [page, select]
  );

  const findTags = useCallback(
    () => tagService.findAll().then((response) => response.data),
    []
  );

  useEffect(() => {
    findBlocks().then((response) => setItems(response));
  }, [findBlocks]);

  useEffect(() => {
    findTags().then((response) => setTags(tags.concat(response)));
  }, [findTags]);

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
        name={value.cd_nm}
        style={value.cd === select ? { backgroundColor: "#dbdbdb" } : null}
        onClick={onTags(value.cd)}
      />
    ));
  };

  const isItems = () => {
    return (
      items.rows.length !== 0 &&
      items.rows.map((value, index) => (
        <Item last={index % 3 === 2} key={value.cd}>
          <Card title={value.title} scope={value.scope} tags={value.tags} />
        </Item>
      ))
    );
  };

  const isPagination = () => {
    return (
      page * 12 < items.count && (
        <Pagination onClick={onPagination}>더보기</Pagination>
      )
    );
  };

  return (
    <>
      <Filter>
        <div>태그 목록</div>
        <div className="tags">{isTags()}</div>
      </Filter>
      <Container>
        {isItems()}
        {isPagination()}
      </Container>
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
  width: calc(100% / 3 - 14px);
  margin-bottom: 20px;
  margin-right: ${(props) => (props.last ? "0px" : "20px")};
`;

const Pagination = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 0px 5px 5px 0px rgba(124, 124, 124, 0.3);
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
