import React from "react";
import styled from "styled-components";
import Homepage from "./Homepage";
import Loading from "./Loading";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

function App() {
  return (
    <Main>
      {/* <Homepage /> */}
      <Loading />
    </Main>
  );
}

export default App;
