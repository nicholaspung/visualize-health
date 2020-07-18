import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 400;
  font-size: 5rem;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 3rem;
`;

const Loading = () => {
  return (
    <div>
      <H1>Loading your data, please wait...</H1>
      <H2>Visualize Health</H2>
    </div>
  );
};

export default Loading;
