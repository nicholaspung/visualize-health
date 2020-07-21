import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";
import StyledCircle from "./baseComponents/StyledCircle";
import {
  WhaleCircle,
  GymTimeCircle,
  DumbbellCircle,
} from "./baseComponents/StyledSvgImages";
import Positioner from "./baseComponents/Positioner";
import useDisplayHook, { ShowChoices } from "./useDisplayHook";
import { blue } from "./baseComponents/colors";

const H1 = styled.h1`
  font-weight: normal;
  font-size: 6rem;
  margin: 0;
  z-index: 1;
`;

const Content = styled.div`
  width: 500px;
  padding: 2rem 0;
  font-size: 1.25rem;
`;

const Span = styled.span`
  color: ${blue};
  cursor: pointer;
`;

const Homepage = () => {
  const [_, setShow] = useDisplayHook();
  return (
    <>
      <Positioner>
        <WhaleCircle width={"400px"} left={"500px"} bottom={"200px"} />
      </Positioner>
      <Positioner>
        <GymTimeCircle width={"300px"} left={"-750px"} bottom={"-100px"} />
      </Positioner>
      <Positioner>
        <DumbbellCircle width={"400px"} left={"750px"} bottom={"-350px"} />
      </Positioner>
      <Positioner>
        <StyledCircle size={Sizes.Small} />
      </Positioner>
      <Positioner>
        <StyledCircle size={Sizes.Medium} />
      </Positioner>
      <Positioner>
        <StyledCircle size={Sizes.Large} />
      </Positioner>
      <H1>Visualize Health</H1>
      <Content>
        <p>
          Thank you for using Visualize Health!
          <br />
          <br />
          If this is your first time, click <Span>here</Span> for a tutorial on
          how to use this application.
          <br />
          <br />
          Otherwise, do your thing!
        </p>
      </Content>
      <StyledButton content={"Import FitNotes CSV File"} size={Sizes.Large} />
    </>
  );
};

export default Homepage;
