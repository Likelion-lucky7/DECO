import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./app/App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>,
);
