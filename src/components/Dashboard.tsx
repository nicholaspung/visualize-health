import React from "react";
import styled from "styled-components";
import StyledButton from "./baseComponents/StyledButton";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import { WhaleCircle } from "./baseComponents/StyledSvgImages";
import Positioner from "./baseComponents/Positioner";

const H1 = styled.h1`
  font-weight: normal;
`;

const Content = styled.div`
  margin: 1rem;
  min-height: 75%;
  width: 95%;
  border: 1px solid black;
`;

const Dashboard = () => {
  return (
    <>
      <header>
        <H1>Visualize Health</H1>
        <StyledButton
          content="Import New FitNotes CSV File"
          size={Sizes.Small}
        />
        <StyledButton content="Clear Data" size={Sizes.Small} />
        <StyledButton content="Click if you need help!" size={Sizes.Small} />
        <Positioner>
          <WhaleCircle width={"400px"} left={"500px"} bottom={"200px"} />
        </Positioner>
      </header>
      <Content>App Container</Content>
    </>
  );
};

export default Dashboard;
