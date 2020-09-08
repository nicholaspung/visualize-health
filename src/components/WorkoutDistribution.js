import React from "react";
import * as d3 from "d3";
import * as d3array from "d3-array";

const width = 350;
const height = 350;
const margin = 20;
const radius = Math.min(width, height) / 2 - margin;

/*
type WorkoutData = {
  Category: string;
  Date: string;
  Distance: string;
  Distance Unit: string;
  Exercise: string;
  Reps: string;
  Time: string;
  Weight (lbs): string;
};
*/

const WorkoutDistribution = ({ data }) => {
  const color = d3
    .scaleOrdinal()
    .domain(data)
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
  const pie = d3.pie().value((d) => d.value);
  const arcGenerator = d3.arc();

  const groupedCategories = d3array.groups(data, (d) => d.Category);
  const data_ready = pie(
    d3.entries(groupedCategories.map((category) => category[1].length))
  );
  console.log(data_ready);

  const totalNumberOfSets = groupedCategories.reduce(
    (acc, curr) => acc + curr[1].length,
    0
  );
  console.log(totalNumberOfSets);
  // entries - count number of sets done
  // volume - add number of weight done per body part
  const perSliceAngle = (data) => (2 * Math.PI) / (totalNumberOfSets / data);
  const slices = data_ready.map((d, i) => {
    const path = arcGenerator({
      startAngle: i * perSliceAngle(d.value),
      endAngle: (i + 1) * perSliceAngle(d.value),
      innerRadius: 0,
      outerRadius: radius,
    });

    return { path, fill: color(d.index) };
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {slices.map((d, i) => (
          <path key={i} d={d.path} fill={d.fill} />
        ))}
      </g>
    </svg>
  );
};

export default WorkoutDistribution;
