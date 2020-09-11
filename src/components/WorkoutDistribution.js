import React from "react";
import styled from "styled-components";
import * as d3 from "d3";
import * as d3array from "d3-array";

const width = 350;
const height = 350;
const margin = 20;
const radius = Math.min(width, height) / 2 - margin;

const Group = styled.g`
  cursor: pointer;
  .text-arc {
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    .text-arc {
      opacity: 1;
      z-index: 1;
    }
  }
`;

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
  // entries - count number of sets done
  // volume - add number of weight done per body part
  const slices = data_ready.map((d) => {
    const path = arcGenerator({
      startAngle: d.startAngle,
      endAngle: d.endAngle,
      innerRadius: 0,
      outerRadius: radius,
    });

    return { path, fill: color(d.index), d };
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {slices.map((d, i) => (
          <Group key={i}>
            <path d={d.path} fill={d.fill} />
            <text
              className="text-arc"
              transform={`translate(${arcGenerator.centroid({
                startAngle: d.d.startAngle,
                endAngle: d.d.endAngle,
                innerRadius: 0,
                outerRadius: radius,
              })})`}
            >
              {Math.round((d.d.value / totalNumberOfSets) * 100)}%
            </text>
          </Group>
        ))}
      </g>
    </svg>
  );
};

export default WorkoutDistribution;
