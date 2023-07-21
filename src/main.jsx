import React from "react";
import ReactDOM from "react-dom/client";
import { Page } from "./Pages";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </React.StrictMode>
);
