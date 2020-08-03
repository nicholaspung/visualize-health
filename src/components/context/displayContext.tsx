import React, { Dispatch, SetStateAction } from "react";

export enum ShowChoices {
  Homepage = "homepage",
  Loading = "loading",
  Dashboard = "dashboard",
}

type DisplayContextType = {
  display: ShowChoices;
  setDisplay: Dispatch<SetStateAction<ShowChoices>>;
};

const defaultDisplay = ShowChoices.Homepage;
const DisplayContext = React.createContext<DisplayContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const DisplayProvider = ({ children }: Props) => {
  const [display, setDisplay] = React.useState(defaultDisplay);

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => React.useContext(DisplayContext);
