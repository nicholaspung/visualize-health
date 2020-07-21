import React from "react";
import styled from "styled-components";

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

const NonexistentButton = styled.button`
  background: white;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 30px;
  width: 100%;
  cursor: pointer;
`;

const categories = [
  "Raw Data",
  "Bodyweight Trends",
  "Workout Distribution",
  "Breakdown",
  "Records",
];

const DashboardCategories = () => {
  return (
    <CategoryContainer>
      <CategoryTitlesContainer>
        {categories.map((category) => (
          <CategoryTitles key={category}>
            <NonexistentButton>
              <H3>{category}</H3>
            </NonexistentButton>
          </CategoryTitles>
        ))}
      </CategoryTitlesContainer>
      <NonexistentButton>
        <Recommendations>Recommendations</Recommendations>
      </NonexistentButton>
    </CategoryContainer>
  );
};

export default DashboardCategories;
