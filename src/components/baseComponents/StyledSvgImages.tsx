import React from "react";
import styled from "styled-components";
import Whale from "../../assets/day51-whale.svg";
import GymTime from "../../assets/103-gym-time.svg";
import Dumbbell from "../../assets/104-dumbbell.svg";

const ImageCircle = styled.img`
  border-radius: 50%;
  position: relative;
`;

interface PositionProps {
  width?: string;
  left?: string;
  bottom?: string;
}

interface StyledImageProps {
  src: string;
  alt: string;
  width?: string;
  left?: string;
  bottom?: string;
}

export const StyledImageCircle = (props: StyledImageProps) => {
  const StyledImageComponent = styled(ImageCircle)<PositionProps>`
    width: ${(props) => (props.width ? props.width : "")};
    left: ${(props) => (props.left ? props.left : "")};
    bottom: ${(props) => (props.bottom ? props.bottom : "")};
  `;

  return (
    <StyledImageComponent
      src={props.src}
      alt={props.alt}
      width={props.width}
      left={props.left}
      bottom={props.bottom}
    />
  );
};

export const WhaleCircle = (props: PositionProps) => (
  <StyledImageCircle
    src={Whale}
    alt="Whale"
    width={props.width}
    left={props.left}
    bottom={props.bottom}
  />
);

export const GymTimeCircle = (props: PositionProps) => (
  <StyledImageCircle
    src={GymTime}
    alt="Gym clock"
    width={props.width}
    left={props.left}
    bottom={props.bottom}
  />
);
export const DumbbellCircle = (props: PositionProps) => (
  <StyledImageCircle
    src={Dumbbell}
    alt="Dumbbell"
    width={props.width}
    left={props.left}
    bottom={props.bottom}
  />
);
