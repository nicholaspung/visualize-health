import React from "react";
import styled, { StyledComponentInnerComponent } from "styled-components";
import { Sizes } from "./baseComponentsTypes";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const GreenCircle = styled(Circle)`
  background: green;
`;

const RedCircle = styled(Circle)`
  background: red;
`;

const YellowCircle = styled(Circle)`
  background: yellow;
`;

const SmallCircle = (
  Component: StyledComponentInnerComponent<"div", any, {}, never>
) => styled(Component)`
  width: 100px;
  height: 100px;
`;

interface CircleProps {
  size: Sizes;
}

const StyledCircle = (props: CircleProps) => {
  let Component;
  const random: number = Math.floor(Math.random() * 3);
  switch (random) {
    case 1:
      Component = RedCircle;
      break;
    case 2:
      Component = YellowCircle;
      break;
    default:
      Component = GreenCircle;
  }

  return <Component />;
};

export default StyledCircle;
