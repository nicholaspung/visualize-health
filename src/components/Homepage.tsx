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
import { blue } from "./baseComponents/colors";
import { useDisplay, ShowChoices } from "./context/displayContext";

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
  const { setDisplay } = useDisplay()!;
  const fileEl = React.useRef(null);

  return (
    <>
      <Positioner>
        <DumbbellCircle width={"400px"} left={"550px"} bottom={"-250px"} />
      </Positioner>
      <Positioner>
        <WhaleCircle width={"400px"} left={"500px"} bottom={"125px"} />
      </Positioner>
      <Positioner>
        <GymTimeCircle width={"300px"} left={"-550px"} bottom={"-100px"} />
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
          If this is your first time, click{" "}
          <Span onClick={() => setDisplay(ShowChoices.Dashboard)}>
            here
          </Span>{" "}
          for a tutorial on how to use this application.
          <br />
          <br />
          Otherwise, do your thing!
        </p>
      </Content>
      <input type="file" accept=".csv" ref={fileEl} />
      <StyledButton
        content={"Import FitNotes CSV File"}
        size={Sizes.Large}
        onClick={() => console.log("hello")}
      />
    </>
  );
};

export default Homepage;
