import React from "react";
import styled from "styled-components";
import { COLOR, FONT, SIZE, SPACING } from "../../constant";
import gsap from "gsap";

/**
 * Custom Input
 * @param {string} label label 명칭
 * @param {JSX} children 아이콘 jSX
 * @returns
 */
export const CustomInput = (props) => {
  const { label, children, ...prop } = props;

  const handler = (e) => {
    const data = {
      event: e.type,
      input: e.currentTarget.parentElement.querySelector("input"),
      value: e.currentTarget.value,
      icon: e.currentTarget.parentElement.querySelector("i"),
      label: e.currentTarget.parentElement.querySelector("label"),
    };

    filter(data);
  };

  const filter = (data) => {
    if (data.event === "focus") {
      paintIcon(data, COLOR.PINK_BASE);
    } else if (data.event === "blur" && data.value.length === 0) {
      paintIcon(data, COLOR.GREY_BASE);
    } else if (data.event === "keydown" && data.value.length === 0) {
      animateLabel(data, 0.7, -8, 15);
    } else if (data.event === "keyup" && data.value.length === 0) {
      animateLabel(data, 1, 0, 0);
    }
  };

  const paintIcon = ({ icon }, color) => {
    gsap.to(icon, {
      duration: 0.3,
      ease: "power3.inOut",
      color: color,
    });
  };

  const animateLabel = ({ input, label }, scale, y, paddingTop) => {
    gsap.to(label, {
      duration: 0.3,
      ease: "power3.inOut",
      transform: "0 12px",
      scale: scale,
      y: y,
    });

    gsap.set(input, {
      paddingTop: paddingTop,
    });
  };

  return (
    <Field>
      <label htmlFor="filed">{label}</label>
      <input
        type="text"
        id="filed"
        onFocus={handler}
        onBlur={handler}
        onKeyUp={handler}
        onKeyDown={handler}
      />
      <i>{children}</i>
    </Field>
  );
};

const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${SIZE.M};

  & label,
  i {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }

  & i {
    left: 0;
    color: ${COLOR.GREY_HIGH};
    padding: ${SPACING.S};
    padding-left: ${SPACING.L};
    transform-origin: center;
  }

  & label {
    left: calc(${SPACING.XL} * 1.4);
    font-size: ${FONT.S};
    color: ${COLOR.GREY_HIGH};
  }

  & input {
    width: 100%;
    height: 100%;
    padding-left: calc(${SPACING.XL} * 1.4);
    padding-right: ${SPACING.M};
    font-size: ${FONT.M};
    border-radius: 40px;
    border: 1px solid ${COLOR.GREY_BASE};
    color: ${COLOR.PINK_BASE};
    caret-color: ${COLOR.GREY_BASE};
    outline: none;
    box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
  }
`;
