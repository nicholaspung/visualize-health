import React from "react";
import * as d3 from "d3";
import { useBodyweightData } from "./context/bodyweightDataContext";

const width = 650;
const height = 350;
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

const transformToDate = (d) =>
  new Date(d.Date.slice(0, 4), d.Date.slice(5, 7), d.Date.slice(8, 10));

const BodyweightTrends = () => {
  const { bodyweightData } = useBodyweightData();
  const [filter, setFilter] = React.useState(FilterOptions.Bodyweight);
  const [time, setTime] = React.useState(TimeOptions.OneMonth);
  const [line, setLine] = React.useState();

  const lineGenerator = d3.line();
  const xScale = d3.scaleTime().range([margin.left, width - margin.right]);
  const yScale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

  const xAxis = React.useRef();
  const yAxis = React.useRef();

  React.useEffect(() => {
    const filterData = bodyweightData.filter((d) => d.Measurement === filter);

    const dataDomain = d3.mean(filterData, (d) => Number(d.Value));
    const dataMaxDomain = d3.max(filterData, (d) => Number(d.Value));
    const dataMinDomain = d3.min(filterData, (d) => Number(d.Value));
    const timeDomain = d3.extent(filterData, transformToDate);

    xScale.domain(timeDomain);
    yScale.domain([
      dataMinDomain - dataDomain * 0.05,
      dataMaxDomain + dataDomain * 0.05,
    ]);

    d3.select(xAxis.current).call(
      d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %d, %y"))
    );
    d3.select(yAxis.current).call(d3.axisLeft(yScale).ticks(10));

    lineGenerator.x((d) => xScale(transformToDate(d)));
    lineGenerator.y((d) => yScale(Number(d.Value)));

    setLine(lineGenerator(filterData));
  }, [filter, time]);

  return (
    <>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {Object.keys(FilterOptions).map((name) => (
          <option key={name} value={FilterOptions[name]}>
            {FilterOptions[name]}
          </option>
        ))}
      </select>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {Object.keys(TimeOptions).map((name) => (
          <option key={name} value={TimeOptions[name]}>
            {TimeOptions[name]}
          </option>
        ))}
      </select>{" "}
      {bodyweightData.filter((d) => d.Measurement === filter).length > 0 ? (
        <svg width={width} height={height}>
          <path d={line} fill="none" stroke={red} strokeWidth="2" />
          <g>
            <g
              ref={xAxis}
              transform={`translate(0, ${height - margin.bottom})`}
            />
            <g ref={yAxis} transform={`translate(${margin.left}, 0)`} />
          </g>
        </svg>
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default BodyweightTrends;
