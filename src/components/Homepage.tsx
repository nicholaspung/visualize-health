import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";
import StyledCircle from "./baseComponents/StyledCircle";

const H1 = styled.h1`
  font-weight: normal;
  font-size: 6rem;
  margin: 0;
`;

const Content = styled.div`
  width: 400px;
  padding: 2rem 0;
`;

function Homepage() {
  return (
    <>
      <StyledCircle />
      <H1>Visualize Health</H1>
      <Content>
        <p>
          Thank you for using Visualize Health!
          <br />
          <br />
          If this is your first time, click here for a tutorial on how to use
          this application.
          <br />
          <br />
          Otherwise, do your thing!
        </p>
      </Content>
      <StyledButton content={"Import FitNotes CSV File"} size={Sizes.Small} />
    </>
  );
}

export default Homepage;
