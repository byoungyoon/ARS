import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import algorithmsService from "../services/algorithms.service";

const Home = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    algorithmsService.findAll().then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Container>
      {items &&
        items.map((value) => (
          <Item key={value.id}>
            <Card></Card>
          </Item>
        ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(100% / 3 - 20px);
  margin-bottom: 20px;
`;
