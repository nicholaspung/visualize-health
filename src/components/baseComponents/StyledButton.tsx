import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponentsTypes";

const Button = styled.button`
  background-color: #41f4ff;
  border-radius: 50px;
  border: 0;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
`;

const SmallButton = styled(Button)`
  font-size: 0.75rem;
`;

const MediumButton = styled(Button)`
  font-size: 1rem;
`;

const LargeButton = styled(Button)`
  font-size: 1.25rem;
`;

interface ButtonProps {
  content: string;
  size: Sizes;
  onClick?: () => void;
}

const StyledButton = (props: ButtonProps) => {
  let Component;
  switch (props.size) {
    case Sizes.Medium:
      Component = MediumButton;
      break;
    case Sizes.Large:
      Component = LargeButton;
      break;
    default:
      Component = SmallButton;
  }
  return (
    <Component type="button" onClick={props.onClick}>
      {props.content}
    </Component>
  );
};

export default StyledButton;
