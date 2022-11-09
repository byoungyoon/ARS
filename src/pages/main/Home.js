import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Tag } from "../../components";
import { SPACING } from "../../constant";
import { algorithmsService, tagService } from "../../services";

export const Home = () => {
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
      items.rows.map((value) => (
        <div key={value.cd}>
          <Card
            cd={value.cd}
            title={value.title}
            scope={value.scope}
            tags={value.tags}
          />
        </div>
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
      <div className="title">알고리즘 목록</div>
      <Filter>
        <div className="tags">{isTags()}</div>
      </Filter>
      <Container>{isItems()}</Container>
      {isPagination()}
    </>
  );
};

const Filter = styled.div`
  & > .tags {
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin-right: ${SPACING.S};
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${SPACING.L};

  margin-top: ${SPACING.L};
  margin-bottom: ${SPACING.L};
`;

const Pagination = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 0px 5px 5px 0px rgba(124, 124, 124, 0.3);
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
