import React from "react";
import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import DashboardCategories from "./DashboardCategories";
import { purple } from "./baseComponents/colors";

const Content = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  min-height: 75%;
  width: 95%;
  background: ${purple};
  border-radius: 30px;
  padding: 2rem;
  display: flex;
`;

const DataContainer = styled.div`
  flex: 1 0 65%;
  border-radius: 30px;
  background: white;
  padding: 2rem;
`;

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Content>
        <DashboardCategories />
        <DataContainer>Graphs</DataContainer>
      </Content>
    </>
  );
};

export default Dashboard;
