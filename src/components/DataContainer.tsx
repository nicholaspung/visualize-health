import React from "react";
import styled from "styled-components";
import { useData } from "./context/dataContext";
import { useDataOption, DataOptions } from "./context/dataOptionContext";
import RawDataDisplay from "./RawDataDisplay";

const Container = styled.div`
  flex: 1 0 65%;
  border-radius: 30px;
  background: white;
  padding: 2rem;
  overflow-y: scroll;
`;

const displayVisualization = (option: DataOptions, data: any) => {
  switch (option) {
    case DataOptions.BodyweightTrends:
      return <div>Bodyweight Trends</div>;
    case DataOptions.Breakdown:
      return <div>Breakdown</div>;
    case DataOptions.Records:
      return <div>Records</div>;
    case DataOptions.WorkoutDistribution:
      return <div>Workout Distribution</div>;
    default:
      return <div>Recommendations</div>;
  }
};

const DataContainer = () => {
  const { data } = useData()!;
  const { option } = useDataOption()!;

  return (
    <Container>
      {<RawDataDisplay data={data} />}
      {displayVisualization(option, data)}
    </Container>
  );
};

export default DataContainer;
