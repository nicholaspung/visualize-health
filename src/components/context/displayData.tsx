import React, { Dispatch, SetStateAction } from "react";

type DataContextType = {
  data: File;
  setData: Dispatch<SetStateAction<File>>;
};

const DataContext = React.createContext<DataContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = React.useState();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
