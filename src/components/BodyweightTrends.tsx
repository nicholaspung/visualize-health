import React from "react";
import * as d3 from "d3";
import { useBodyweightData } from "./context/bodyweightDataContext";

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

const BodyweightTrends = () => {
  const { bodyweightData } = useBodyweightData()!;

  const [filter, setFilter] = React.useState(FilterOptions.Bodyweight);

  console.log(
    bodyweightData.data
      .filter((k: any) => k[2] === filter)
      .map((k: any) => ({
        date: k[0],
        weight: k[3],
        unit: k[4],
      }))
  );
  return <svg viewBox="0 0 100 50">Hi</svg>;
};

export default BodyweightTrends;
