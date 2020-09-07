import React from "react";
import styled from "styled-components";
import { useData } from "./context/dataContext";
import { useDataOption, DataOptions } from "./context/dataOptionContext";
import RawDataDisplay from "./RawDataDisplay";
import BodyweightTrends from "./BodyweightTrends";
import WorkoutDistribution from "./WorkoutDistribution";

const Container = styled.div`
  flex: 1 0 65%;
  border-radius: 30px;
  background: white;
  padding: 2rem;
  overflow-y: scroll;
`;

const displayVisualization = (option: DataOptions, data: any) => {
  switch (option) {
    case DataOptions.RawData:
      return <RawDataDisplay data={data} />;
    case DataOptions.BodyweightTrends:
      return <BodyweightTrends />;
    case DataOptions.Breakdown:
      return <div>Breakdown</div>;
    case DataOptions.Records:
      return <div>Records</div>;
    case DataOptions.WorkoutDistribution:
      return <WorkoutDistribution data={data} />;
    default:
      return <div>Recommendations</div>;
  }
};

const DataContainer = () => {
  const { data } = useData()!;
  const { option } = useDataOption()!;

  return <Container>{displayVisualization(option, data)}</Container>;
};

export default DataContainer;
