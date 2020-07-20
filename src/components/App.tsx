import React from "react";
import styled from "styled-components";
import Homepage from "./Homepage";
import Loading from "./Loading";
import Dashboard from "./Dashboard";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Main>
      <Homepage />
      {/* <Loading /> */}
      {/* <Dashboard /> */}
    </Main>
  );
}

export default App;
