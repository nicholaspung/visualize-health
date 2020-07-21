import { useState } from "react";

export enum ShowChoices {
  Homepage = "homepage",
  Loading = "loading",
  Dashboard = "dashboard",
}

const useDisplayHook = () => {
  const [show, setShow] = useState(ShowChoices.Homepage);
  return [show, setShow];
};

export default useDisplayHook;
