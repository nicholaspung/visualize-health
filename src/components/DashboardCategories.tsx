import React from "react";
import styled from "styled-components";
import { useDataOption, DataOptions } from "./context/dataOptionContext";

const CategoryContainer = styled.div`
  flex: 1 0 20%;
  background: white;
  margin-right: 2rem;
  border-radius: 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const CategoryTitlesContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CategoryTitles = styled.li`
  text-align: center;
  border-bottom: 1px solid black;
`;

const H3 = styled.h3`
  margin: 1rem;
  font-weight: normal;
  font-size: 2rem;
`;

const Recommendations = styled.h3`
  margin: 0;
  padding: 1rem;
  font-weight: normal;
  font-size: 2rem;
  border-top: 1px solid black;
  text-align: center;
`;

type ButtonProps = {
  active?: boolean;
};

const NonexistentButton = styled.button<ButtonProps>`
  background: white;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 30px;
  width: 100%;
  cursor: pointer;
  ${(props) =>
    props.active ? "font-weight: bold; text-decoration: underline;" : ""}
`;

const categories = [
  { label: "Raw Data", value: DataOptions.RawData },
  { label: "Bodyweight Trends", value: DataOptions.BodyweightTrends },
  { label: "Workout Distribution", value: DataOptions.WorkoutDistribution },
  { label: "Breakdown", value: DataOptions.Breakdown },
  { label: "Records", value: DataOptions.Records },
];

const endCategory = {
  label: "Recommendations",
  value: DataOptions.Recommendations,
};

const DashboardCategories = () => {
  const { setOption, option } = useDataOption()!;

  return (
    <CategoryContainer>
      <CategoryTitlesContainer>
        {categories.map((category) => (
          <CategoryTitles key={category.value}>
            <NonexistentButton
              onClick={() => setOption(category.value)}
              active={option === category.value}
            >
              <H3>{category.label}</H3>
            </NonexistentButton>
          </CategoryTitles>
        ))}
      </CategoryTitlesContainer>
      <NonexistentButton
        active={option === endCategory.value}
        onClick={() => setOption(endCategory.value)}
      >
        <Recommendations>{endCategory.label}</Recommendations>
      </NonexistentButton>
    </CategoryContainer>
  );
};

export default DashboardCategories;
