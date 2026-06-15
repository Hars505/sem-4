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
import Text from "./Test";
import Form2 from "./Form2";
import Todo from "./Todo";
import Home from "./Home";
import PC from "./PC";
import JC from "./JC";
import UEI from "./UEI";
import API from './API';
import Render from "./Render";
import You from "./Youtube";
import Card from "./VideoCard";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <BrowserRouter>
      <You />
    </BrowserRouter>
  </StrictMode>,
);
