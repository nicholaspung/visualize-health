import React from "react";
import * as d3 from "d3";
import { useBodyweightData } from "./context/bodyweightDataContext";
import { extent } from "d3";

const width = 650;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const red = "#eb6a5b";
const blue = "#52b6ca";

enum FilterOptions {
  Bodyweight = "Bodyweight",
  BodyFat = "Body Fat",
  Neck = "Neck",
  Waist = "Waist",
  UpperArmRight = "Upper Arm (Right)",
  UpperArmLeft = "Upper Arm (Left)",
  ThighRight = "Thigh (Right)",
  ThighLeft = "Thigh (Left)",
  Calories = "Calories",
  Steps = "Steps",
}

enum TimeOptions {
  OneMonth = "1m",
  ThreeMonths = "3m",
  SixMonths = "6m",
  OneYear = "1y",
  All = "All",
}

const BodyweightTrends = () => {
  const { bodyweightData } = useBodyweightData()!;

  const [timeDomain, setTimeDomain] = React.useState(
    d3.extent(bodyweightData, (d: any) => d.data)
  );

  const lineGenerator = d3.line();
  const data = d3.extent(bodyweightData, (d: any) => d.data);
  const [filter, setFilter] = React.useState(FilterOptions.Bodyweight);
  const [time, setTime] = React.useState(TimeOptions.OneMonth);
  const [average, setAverage] = React.useState(lineGenerator(data));
  const xScale = d3.scaleTime().range([margin.left, width - margin.right]);
  const yScale = d3.scaleTime().range([height - margin.bottom, margin.top]);

  const xAxis = d3
    .axisBottom(xScale)
    .tickFormat(
      d3.timeFormat("%b") as (
        domainValue: number | Date | { valueOf(): number },
        index: number
      ) => string
    );
  const yAxis = d3.axisLeft(yScale).tickFormat((d) => String(d));

  return (
    <svg width={width} height={height}>
      <path d={average} fill="none" stroke={red} strokeWidth="2" />
    </svg>
  );
};

export default BodyweightTrends;
