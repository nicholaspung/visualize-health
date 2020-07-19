import React from "react";
import styled from "styled-components";
import Whale from "../../assets/day51-whale.svg";
import GymTime from "../../assets/103-gym-time.svg";
import Dumbbell from "../../assets/104-dumbbell.svg";

const ImageCircle = styled.img`
  border-radius: 50%;
  position: relative;
`;

const WhaleCircleComponent = styled(ImageCircle)`
  width: 400px;
  left: 500px;
  bottom: 200px;
`;

const GymTimeCircleComponent = styled(ImageCircle)`
  width: 300px;
  left: -750px;
  bottom: -100px;
`;

const DumbbellCircleComponent = styled(ImageCircle)`
  width: 400px;
  left: 750px;
  bottom: -350px;
`;

export const WhaleCircle = () => (
  <WhaleCircleComponent src={Whale} alt="Whale" />
);
export const GymTimeCircle = () => (
  <GymTimeCircleComponent src={GymTime} alt="Gym clock" />
);
export const DumbbellCircle = () => (
  <DumbbellCircleComponent src={Dumbbell} alt="Dumbbell" />
);
