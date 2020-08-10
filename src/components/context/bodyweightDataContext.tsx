import React, { Dispatch, SetStateAction } from "react";

type BodyweightDataContextType = {
  bodyweightData: any;
  setBodyweightData: Dispatch<SetStateAction<any>>;
};

const BodyweightDataContext = React.createContext<
  BodyweightDataContextType | undefined
>(undefined);

type Props = {
  children: React.ReactNode;
};

export const BodyweightDataProvider = ({ children }: Props) => {
  const [bodyweightData, setBodyweightData] = React.useState(undefined);

  return (
    <BodyweightDataContext.Provider
      value={{ bodyweightData, setBodyweightData }}
    >
      {children}
    </BodyweightDataContext.Provider>
  );
};

export const useBodyweightData = () => React.useContext(BodyweightDataContext);
