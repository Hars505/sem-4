import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import File1 from "./File1";
import Lmn from "./Lmn";
import Form from "./Form";
import Parent from "./Parent";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <Parent />
  </StrictMode>,
);
