import React from "react";
import Papa from "papaparse";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";
import { useDisplay, ShowChoices } from "./context/displayContext";
import { useData } from "./context/dataContext";

const ImportCSV = () => {
  const { setDisplay } = useDisplay()!;
  const { setData } = useData()!;
  const fileEl = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="file" accept=".csv" ref={fileEl} />
      <StyledButton
        content={"Import FitNotes CSV File"}
        size={Sizes.Large}
        onClick={() => {
          if (fileEl.current == null) return;

          const inputEl = fileEl.current;
          const files = inputEl.files;

          if (files!.length === 0) return;

          setDisplay(ShowChoices.Loading);
          Papa.parse(files![0], {
            header: true,
            complete: (res) => setData(res),
            error: (err) => setData(err),
          });
        }}
      />
    </>
  );
};

export default ImportCSV;
