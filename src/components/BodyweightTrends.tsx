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

type BodyweightData = {
  Date: string;
  Measurement: string;
  Time: string;
  Unit: string;
  Value: string;
};

const BodyweightTrends = () => {
  const { bodyweightData } = useBodyweightData()!;
  const [filter, setFilter] = React.useState(FilterOptions.Bodyweight);
  const [time, setTime] = React.useState(TimeOptions.OneMonth);

  const lineGenerator = d3.line<any>();
  const xScale = d3.scaleTime().range([margin.left, width - margin.right]);
  const yScale = d3.scaleTime().range([height - margin.bottom, margin.top]);

  const weightDomain = d3.extent(
    bodyweightData,
    (d: BodyweightData) => d.Value
  );
  const timeMin = d3.min(bodyweightData, (d: BodyweightData) => d.Date);
  const timeMax = d3.max(bodyweightData, (d: BodyweightData) => d.Date);

  xScale.domain(weightDomain);
  yScale.domain([timeMin, timeMax]);

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
