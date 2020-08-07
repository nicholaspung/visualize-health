import React, { Dispatch, SetStateAction } from "react";

export enum DataOptions {
  RawData = "raw data",
  BodyweightTrends = "bodyweight trends",
  WorkoutDistribution = "workout distribution",
  Breakdown = "breakdown",
  Records = "records",
  Recommendations = "recommendations",
}

type DataOptionContextType = {
  option: DataOptions;
  setOption: Dispatch<SetStateAction<DataOptions>>;
};

const defaultDataOption = DataOptions.RawData;
const DataOptionContext = React.createContext<
  DataOptionContextType | undefined
>(undefined);

type Props = {
  children: React.ReactNode;
};

export const DataOptionProvider = ({ children }: Props) => {
  const [option, setOption] = React.useState(defaultDataOption);

  return (
    <DataOptionContext.Provider value={{ option, setOption }}>
      {children}
    </DataOptionContext.Provider>
  );
};

export const useDataOption = () => React.useContext(DataOptionContext);
