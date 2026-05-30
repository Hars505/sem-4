import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import File1 from "./File1";
import Lmn from "./Lmn";
import Form from "./Form";
import Parent from "./Parent";
import Parent2 from "./Parent2";
import Route from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Click from "./Click";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <BrowserRouter>
      <Click />
    </BrowserRouter>
  </StrictMode>,
);
