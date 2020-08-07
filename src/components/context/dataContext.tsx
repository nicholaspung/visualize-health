import React, { Dispatch, SetStateAction } from "react";

type DataContextType = {
  data: any;
  setData: Dispatch<SetStateAction<any>>;
};

const DataContext = React.createContext<DataContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = React.useState(undefined);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
