import React from "react";
import styled from "styled-components";
import { useDataOption, DataOptions } from "./context/dataOptionContext";

type TableProps = {
  active?: boolean;
};

const Table = styled.table<TableProps>`
  ${(props) => (props.active ? "" : "display: none;")}
  border-collapse: collapse;
  border: 1px solid black;

  tr {
    border-bottom: 1px solid black;
    height: 2rem;
  }

  thead th:nth-child(1) {
    width: 10%;
  }

  thead th:nth-child(2) {
    width: 20%;
  }

  thead th:nth-child(3) {
    width: 15%;
  }

  thead th:nth-child(4) {
    width: 15%;
  }

  thead th:nth-child(5) {
    width: 10%;
  }

  thead th:nth-child(6) {
    width: 10%;
  }

  thead th:nth-child(7) {
    width: 10%;
  }

  thead th:nth-child(8) {
    width: 10%;
  }

  th,
  td {
    font-size: 0.75rem;
    padding: 0.15rem;
  }

  tr:nth-child(even) {
    background: lightgrey;
  }

  td,
  th {
    text-align: center;
    border-right: 1px solid black;
    border-left: 1px solid black;
  }

  td:nth-of-type(1),
  th:nth-of-type(1) {
    border-left: 0;
  }

  td:nth-of-type(8),
  th:nth-of-type(8) {
    border-right: 0;
  }
`;

type RawDataDisplayProps = {
  data: any;
};

const RawDataDisplay = (props: RawDataDisplayProps) => {
  const { option } = useDataOption()!;

  return (
    <Table active={option === DataOptions.RawData}>
      <thead>
        <tr>
          {props.data.data[0].map((fields: string) => (
            <th key={fields}>{fields}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.data.slice(1).map((row: any, idx: number) => (
          <tr key={row.join(`${idx}`)}>
            {row.map((fields: string, idx: number) => (
              <td key={`${fields}${idx}`}>{fields}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RawDataDisplay;
