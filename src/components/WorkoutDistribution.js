import React from "react";
import * as d3 from "d3";

const width = 350;
const height = 350;
const margin = 20;
const radius = Math.min(width, height) / 2 - margin;

const WorkoutDistribution = ({ data }) => {
  const radiusScale = d3.scaleLinear().range([0, width / 2]);
  const colorScale = d3.scaleLinear();
  const arcGenerator = d3.arc();

  // entries - count number of sets done
  // volume - add number of weight done per body part

  return (
    <svg width={width} height={height}>
      {pieGenerator(d3.entries(data)).map((d, i) => {
        return (
          <path
            d={d3.arc().innerRadius(0).outerRadius(radius)}
            fill="white"
            stroke="black"
          />
        );
      })}
    </svg>
  );
};

export default WorkoutDistribution;
