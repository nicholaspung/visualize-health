import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponentsTypes";

type DivProps = {
  color: string;
  width: string;
  height: string;
  left: string;
  bottom: string;
  animate: boolean;
};

const Circle = styled.div<DivProps>`
  position: ${(props) => (props.animate ? "absolute" : "relative")};
  left: ${(props) => (props.left ? props.left : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "100px")};
  background: ${(props) => (props.color ? props.color : "#333379")};
  border-radius: 50%;
  ${(props) =>
    props.animate &&
    `
  animation: grow-and-shrink ${Math.random() * 5 + 3}s infinite;

  @keyframes grow-and-shrink {
    from {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    to {
      transform: scale(0);
    }
  }
  `}
`;

interface CircleProps {
  size: Sizes;
  randomPosition?: boolean;
  animate?: boolean;
}

const StyledCircle = (props: CircleProps) => {
  let color: string;
  const random: number = Math.floor(
    Math.random() * (props.randomPosition ? 5 : 3)
  );
  switch (random) {
    case 1:
      color = `#FD0707`;
      break;
    case 2:
      color = `#FFE43E`;
      break;
    case 3:
      color = `#333379`;
      break;
    case 4:
      color = `#2b9cf2`;
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

  if (props.randomPosition) {
    left = `${Math.random() * window.innerWidth - 450}px`;
    bottom = `${Math.random() * window.innerHeight - 450}px`;
  }

  let animate = props.animate ? true : false;

  return (
    <Circle
      color={color}
      height={height}
      width={width}
      left={left}
      bottom={bottom}
      animate={animate}
    />
  );
};

export default StyledCircle;
