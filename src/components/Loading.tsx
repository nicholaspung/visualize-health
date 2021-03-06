import React from "react";
import styled from "styled-components";
import StyledCircle from "./baseComponents/StyledCircle";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import Positioner from "./baseComponents/Positioner";
import { useDisplay, ShowChoices } from "./context/displayContext";
import { useData } from "./context/dataContext";

const H1 = styled.h1`
  position: relative;
  font-weight: 400;
  font-size: 5rem;
  z-index: 1;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 2.5rem;
  z-index: 1;
`;

const Loading = () => {
  const { setDisplay } = useDisplay()!;
  const { data } = useData()!;

  React.useEffect(() => {
    if (data) {
      setTimeout(() => {
        setDisplay(ShowChoices.Dashboard);
      }, 2000);
    }
  }, [setDisplay, data]);

  return (
    <div>
      <H1>Loading your data, please wait...</H1>
      <H2>Visualize Health</H2>
      <Positioner>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <StyledCircle
              size={Sizes.Small}
              randomPosition={true}
              animate={true}
              key={`a${idx}`}
            />
          ))}
      </Positioner>
    </div>
  );
};

export default Loading;
