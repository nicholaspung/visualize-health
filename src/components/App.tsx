import React from "react";
import styled from "styled-components";
import Homepage from "./Homepage";
import Loading from "./Loading";
import Dashboard from "./Dashboard";
import { useDisplay, ShowChoices } from "./context/displayContext";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { display } = useDisplay()!;

  return (
    <Main>
      {display === ShowChoices.Homepage && <Homepage />}
      {display === ShowChoices.Loading && <Loading />}
      {display === ShowChoices.Dashboard && <Dashboard />}
    </Main>
  );
};

export default App;
