import React from "react";
import styled from "styled-components";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";
import StyledCircle from "./baseComponents/StyledCircle";
import Positioner from "./baseComponents/Positioner";
import Whale from "../assets/day51-whale.svg";
import GymTime from "../assets/103-gym-time.svg";
import Dumbbell from "../assets/104-dumbbell.svg";

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

const ImageCircle = styled.img`
  border-radius: 50%;
  position: relative;
`;

const WhaleCircle = styled(ImageCircle)`
  width: 400px;
  left: 500px;
  bottom: 200px;
`;

const GymTimeCircle = styled(ImageCircle)`
  width: 300px;
  left: -750px;
  bottom: -100px;
`;

const DumbbellCircle = styled(ImageCircle)`
  width: 400px;
  left: 750px;
  bottom: -350px;
`;

function Homepage() {
  return (
    <>
      <Positioner>
        <WhaleCircle src={Whale} alt="Whale" />
      </Positioner>
      <Positioner>
        <GymTimeCircle src={GymTime} alt="Gym clock" />
      </Positioner>
      <Positioner>
        <DumbbellCircle src={Dumbbell} alt="Dumbbell" />
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
          If this is your first time, click here for a tutorial on how to use
          this application.
          <br />
          <br />
          Otherwise, do your thing!
        </p>
      </Content>
      <StyledButton content={"Import FitNotes CSV File"} size={Sizes.Large} />
    </>
  );
}

export default Homepage;
