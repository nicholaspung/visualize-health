import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { DisplayProvider } from "./components/context/displayContext";
import { DataProvider } from "./components/context/dataContext";
import { DataOptionProvider } from "./components/context/dataOptionContext";
import { BodyweightDataProvider } from "./components/context/bodyweightDataContext";
// import * as serviceWorker from './serviceWorker';
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Open Sans: 300, 400, 700", "Reenie Beanie"],
  },
  timeout: 2000,
});

ReactDOM.render(
  <React.StrictMode>
    <BodyweightDataProvider>
      <DataProvider>
        <DataOptionProvider>
          <DisplayProvider>
            <App />
          </DisplayProvider>
        </DataOptionProvider>
      </DataProvider>
    </BodyweightDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
