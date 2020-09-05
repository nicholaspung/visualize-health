import React from "react";
import * as d3 from "d3";
import { useBodyweightData } from "./context/bodyweightDataContext";

const width = 650;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const red = "#eb6a5b";
const blue = "#52b6ca";

/*
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
*/

const FilterOptions = {
  Bodyweight: "Bodyweight",
  BodyFat: "Body Fat",
  Neck: "Neck",
  Waist: "Waist",
  UpperArmRight: "Upper Arm (Right)",
  UpperArmLeft: "Upper Arm (Left)",
  ThighRight: "Thigh (Right)",
  ThighLeft: "Thigh (Left)",
  Calories: "Calories",
  Steps: "Steps",
};

const TimeOptions = {
  OneMonth: "1m",
  ThreeMonths: "3m",
  SixMonths: "6m",
  OneYear: "1y",
  All: "All",
};

const BodyweightTrends = () => {
  // const { bodyweightData } = useBodyweightData()!;
  const { bodyweightData } = useBodyweightData();
  const [filter, setFilter] = React.useState(FilterOptions.Bodyweight);
  const [time, setTime] = React.useState(TimeOptions.OneMonth);

  // const lineGenerator = d3.line<any>();
  const lineGenerator = d3.line();
  const xScale = d3.scaleTime().range([margin.left, width - margin.right]);
  const yScale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

  // const weightDomain = d3.extent(bodyweightData, (d: BodyweightData) =>
  const weightDomain = d3.mean(
    bodyweightData.filter((d) => d.Measurement === FilterOptions.Bodyweight),
    (d) => Number(d.Value)
  );
  const timeDomain = d3.extent(
    bodyweightData,
    (d) => new Date(d.Date.slice(0, 4), d.Date.slice(5, 7), d.Date.slice(8, 10))
  );
  // const timeMin = d3.min(bodyweightData, (d: BodyweightData) => d.Date);
  // const timeMax = d3.max(bodyweightData, (d: BodyweightData) => d.Date);

  xScale.domain(timeDomain);
  yScale.domain([weightDomain - 20, weightDomain + 20]);

  // const xAxis = d3
  //   .axisBottom(xScale)
  //   .tickFormat(
  //     d3.timeFormat("%b") as (
  //       domainValue: number | Date | { valueOf(): number },
  //       index: number
  //     ) => string
  //   );

  const xAxis = React.useRef();
  const yAxis = React.useRef();

  React.useEffect(() => {
    d3.select(xAxis.current).call(
      d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %d, %y"))
    );
    d3.select(yAxis.current).call(d3.axisLeft(yScale).ticks(10));
  }, []);

  return (
    <svg width={width} height={height}>
      {/* <path d={average} fill="none" stroke={red} strokeWidth="2" /> */}
      <g>
        <g ref={xAxis} transform={`translate(0, ${height - margin.bottom})`} />
        <g ref={yAxis} transform={`translate(${margin.left}, 0)`} />
      </g>
    </svg>
  );
};

export default BodyweightTrends;
