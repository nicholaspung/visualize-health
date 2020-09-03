import React from "react";
import Papa, { ParseResult } from "papaparse";
import styled from "styled-components";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";
import { useDisplay, ShowChoices } from "./context/displayContext";
import { useData } from "./context/dataContext";
import { useBodyweightData } from "./context/bodyweightDataContext";

const mutateData = (csv: ParseResult<Array<string>>) => {
  const rows: Array<Array<string>> = [...csv.data];

  let tableNames: Array<string> = rows.splice(0, 1)[0];
  return rows.map((data) => {
    let result: any = {};
    tableNames.forEach((name, index) => {
      result[name] = data[index];
    });
    return result;
  });
};

type DivProps = {
  active?: boolean;
};

const InputContainer = styled.div<DivProps>`
  display: flex;
  flex-flow: column wrap;
  padding: 0.5rem;
  width: 20rem;
  background: ${(props) => (props.active ? "lightgrey" : "white")};
  border-radius: 5px;
`;

const RequiredText = styled.span`
  color: red;
`;

const ImportCSV = () => {
  const fileExercisesEl = React.useRef<HTMLInputElement>(null);
  const fileBodyweightEl = React.useRef<HTMLInputElement>(null);
  const [missing, setMissing] = React.useState(false);

  const { setDisplay } = useDisplay()!;
  const { setData } = useData()!;
  const { setBodyweightData } = useBodyweightData()!;

  return (
    <>
      <InputContainer active={missing}>
        <label htmlFor="exercises">
          Import FitNotes Exercises CSV <RequiredText>(Required)</RequiredText>
        </label>
        <input
          name="exercises"
          type="file"
          accept=".csv"
          ref={fileExercisesEl}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="bodyweight">Import FitNotes Body Tracker CSV</label>
        <input
          name="bodyweight"
          type="file"
          accept=".csv"
          ref={fileBodyweightEl}
        />
      </InputContainer>
      <StyledButton
        content={"Import"}
        size={Sizes.Large}
        onClick={() => {
          if (fileExercisesEl.current == null) return;

          const exercisesEl = fileExercisesEl.current;
          const exercisesFiles = exercisesEl.files;

          if (exercisesFiles!.length === 0) {
            setMissing(true);
            return;
          }

          const bodyweightEl = fileBodyweightEl.current;
          const bodyweightFiles = bodyweightEl?.files;

          if (bodyweightFiles!.length > 0) {
            Papa.parse(bodyweightFiles![0], {
              header: false,
              complete: (res: ParseResult<Array<string>>) => {
                setBodyweightData(mutateData(res));
              },
              error: (err) => setBodyweightData(err),
            });
          }

          Papa.parse(exercisesFiles![0], {
            header: false,
            complete: (res: ParseResult<Array<string>>) => {
              setData(mutateData(res));
            },
            error: (err) => setData(err),
          });

          setDisplay(ShowChoices.Loading);
        }}
      />
    </>
  );
};

export default ImportCSV;
