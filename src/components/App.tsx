import React from "react";
import styled from "styled-components";
import Homepage from "./Homepage";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

function App() {
  return (
    <Main>
      <Homepage />
    </Main>
  );
}

export default App;
