import React from "react";
import styled from "styled-components";
import StyledButton from "./baseComponents/StyledButton";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import { WhaleCircle } from "./baseComponents/StyledSvgImages";
import { useDisplay, ShowChoices } from "./context/displayContext";
import { useData } from "./context/dataContext";

const H1 = styled.h1`
  font-weight: normal;
  font-size: 5rem;
  padding: 0;
  margin: 0;
`;

const DataContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
  margin: 1rem 1rem 0 0;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const WhaleContainer = styled.button`
  border: 0;
  background: white;
  cursor: pointer;
`;

const DashboardHeader = () => {
  const { setDisplay } = useDisplay()!;
  const { setData } = useData()!;

  return (
    <Header>
      <DataContainer>
        <StyledButton
          content="Import New FitNotes CSV File"
          size={Sizes.Small}
        />
        <StyledButton
          content="Clear Data"
          size={Sizes.Small}
          onClick={() => {
            setData(undefined);
            setDisplay(ShowChoices.Homepage);
          }}
        />
      </DataContainer>
      <LogoContainer>
        <H1>Visualize Health</H1>
        <StyledButton content="Click if you need help!" size={Sizes.Small} />
      </LogoContainer>
      <WhaleContainer
        type="button"
        onClick={() => setDisplay(ShowChoices.Homepage)}
      >
        <WhaleCircle width={"140px"} />
      </WhaleContainer>
    </Header>
  );
};

export default DashboardHeader;
