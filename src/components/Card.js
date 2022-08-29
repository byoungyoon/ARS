import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

const Card = (props) => {
  const { title, scope, tags, ...prop } = props;

  const isScope = (num, filled) => {
    return [...Array(num)].map((value, index) =>
      filled ? (
        <Star key={"filled" + index} />
      ) : (
        <StarLine key={"lined" + index} />
      )
    );
  };

  const isTag = () => {
    return tags.map((value) => <Tag key={value.cd} name={value.cd_nm} />);
  };

  return (
    <Container>
      <div className="content" {...prop}>
        <div>{title}</div>
        <div className="scope">
          {isScope(scope, true)}
          {isScope(5 - scope, false)}
        </div>
      </div>
      <div className="tag">{isTag()}</div>
    </Container>
  );
};

export default Card;

const Star = styled.p`
  margin: 0;
  width: 20px;
  height: 20px;
  background: url("./svg/iconmonstr-star-filled.svg") no-repeat center center;
`;

const StarLine = styled.p`
  margin: 0;
  width: 20px;
  height: 20px;
  background: url("./svg/iconmonstr-star-lined.svg") no-repeat center center;
`;

const Container = styled.div`
  box-shadow: 0px 5px 5px 0px rgba(124, 124, 124, 0.3);
  border-radius: 8px 0 8px 0;
  height: 120px;
  background-color: #eaeaea;
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  & > .content {
    box-sizing: border-box;
    position: absolute;
    border-radius: 8px 0 8px 0;
    top: 10px;
    left: 10px;
    background-color: #fff;
    width: 60%;
    height: 100px;
    padding: 10px;

    & > .scope {
      display: flex;
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }

  & > .tag {
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: right;
  }
`;
