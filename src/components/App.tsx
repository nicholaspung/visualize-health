import React, { useState } from "react";
import styled from "styled-components";
import Homepage from "./Homepage";
import Loading from "./Loading";
import Dashboard from "./Dashboard";
import useDisplayHook, { ShowChoices } from "./useDisplayHook";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [show] = useDisplayHook();
  return (
    <Main>
      {show === ShowChoices.Homepage && <Homepage />}
      {show === ShowChoices.Loading && <Loading />}
      {show === ShowChoices.Dashboard && <Dashboard />}
    </Main>
  );
};

export default App;
