import React from "react";
import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import DashboardCategories from "./DashboardCategories";
import { purple } from "./baseComponents/colors";
import { useData } from "./context/dataContext";
import DataContainer from "./DataContainer";

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

const Dashboard = () => {
  const { data } = useData()!;

  console.log(data);
  return (
    <>
      <DashboardHeader />
      <Content>
        <DashboardCategories />
        <DataContainer />
      </Content>
    </>
  );
};

export default Dashboard;
