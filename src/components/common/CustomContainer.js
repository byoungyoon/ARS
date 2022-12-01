import React, { Children, useMemo, useState } from "react";
import styled from "styled-components";
import { VerticalLineTwo } from "../../constant";

export const CustomContainer = (props) => {
  const { left, right, children, ...prop } = props;

  const [mouseDown, setMouseDown] = useState(false);
  const [area, setArea] = useState({ left: left, right: right });
  const arrayChildren = useMemo(() => Children.toArray(children), []);

  const onMouseDownOfResize = () => {
    setMouseDown(true);
  };

  const onMouseUpOfResize = () => {
    setMouseDown(false);
  };

  const onMouseMoveOfResize = (e) => {
    const client = e.target.getBoundingClientRect();
    const x = e.pageX - (client.x < 0 ? 0 : client.x);

    const pX = (x / client.width) * 100;
    const max = 10;

    let left = pX;
    let right = 100 - pX;
    if (left <= max) {
      left = max;
      right = 100 - max;
    } else if (right <= max) {
      left = 100 - max;
      right = max;
    }

    setArea({ left: left, right: right });
  };

  return (
    <Container left={area.left} right={area.right}>
      {mouseDown ? (
        <Base onMouseMove={onMouseMoveOfResize} onMouseUp={onMouseUpOfResize} />
      ) : null}
      {arrayChildren[0]}
      <Resize onMouseDown={onMouseDownOfResize}>
        <VerticalLineTwo />
      </Resize>
      {arrayChildren[1]}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `calc(${props.left}% - 8px) 16px calc(${props.right}% - 8px)`};

  position: relative;
`;

const Resize = styled.div`
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: col-resize;
`;

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 999;
  cursor: col-resize;
`;
