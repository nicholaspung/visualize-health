import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponentsTypes";

type DivProps = {
  color: string;
  width: string;
  height: string;
  left: string;
  bottom: string;
};

const Circle = styled.div<DivProps>`
  position: relative;
  left: ${(props) => (props.left ? props.left : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "100px")};
  background: ${(props) => (props.color ? props.color : "#333379")};
  border-radius: 50%;
`;

interface CircleProps {
  size: Sizes;
}

const StyledCircle = (props: CircleProps) => {
  let color: string;
  const random: number = Math.floor(Math.random() * 3);
  switch (random) {
    case 1:
      color = `#FD0707`;
      break;
    case 2:
      color = `#FFE43E`;
      break;
    default:
      color = `#0DF625`;
  }

  let height: string;
  let width: string;
  let left: string;
  let bottom: string;
  switch (props.size) {
    case Sizes.Medium:
      height = `250px`;
      width = `250px`;
      left = `-300px`;
      bottom = `175px`;
      break;
    case Sizes.Large:
      height = `450px`;
      width = `450px`;
      left = `-600px`;
      bottom = `-500px`;
      break;
    default:
      height = `200px`;
      width = `200px`;
      left = `350px`;
      bottom = `-300px`;
  }

  return (
    <Circle
      color={color}
      height={height}
      width={width}
      left={left}
      bottom={bottom}
    />
  );
};

export default StyledCircle;
