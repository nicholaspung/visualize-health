import React, { Dispatch } from "react";
import Papa from "papaparse";
import { Sizes } from "./baseComponents/baseComponentsTypes";
import StyledButton from "./baseComponents/StyledButton";

type ImportCSVProps = {
  content: string;
  setContext: Dispatch<any>;
  callback: () => void;
};

const ImportCSV = (props: ImportCSVProps) => {
  const fileEl = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="file" accept=".csv" ref={fileEl} />
      <StyledButton
        content={props.content}
        size={Sizes.Large}
        onClick={() => {
          if (fileEl.current == null) return;

          const inputEl = fileEl.current;
          const files = inputEl.files;

          if (files!.length === 0) return;

          props.callback();
          Papa.parse(files![0], {
            header: false,
            complete: (res) => props.setContext(res),
            error: (err) => props.setContext(err),
          });
        }}
      />
    </>
  );
};

export default ImportCSV;
