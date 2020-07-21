import React from "react";
import styled from "styled-components";
import StyledButton from "./baseComponents/StyledButton";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import { WhaleCircle } from "./baseComponents/StyledSvgImages";

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
  margin-right: 1rem;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const DashboardHeader = () => {
  return (
    <Header>
      <DataContainer>
        <StyledButton
          content="Import New FitNotes CSV File"
          size={Sizes.Small}
        />
        <StyledButton content="Clear Data" size={Sizes.Small} />
      </DataContainer>
      <LogoContainer>
        <H1>Visualize Health</H1>
        <StyledButton content="Click if you need help!" size={Sizes.Small} />
      </LogoContainer>
      <WhaleCircle width={"155px"} />
    </Header>
  );
};

export default DashboardHeader;
