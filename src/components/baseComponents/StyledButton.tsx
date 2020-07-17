import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #41f4ff;
  border-radius: 50px;
  border: 0;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
`;

interface ButtonProps {
  content: string;
}

const StyledButton = (props) => {
  return <Button type="button">{props.content}</Button>;
};

export default StyledButton;
