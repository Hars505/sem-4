import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
import File1 from "./File1";
import Lmn from "./Lmn";
import Form from "./Form";
import Parent from "./Parent";
/**
 * @param {string} _url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(_url, options) {
  return renderToPipeableStream(
    <StrictMode>
      <Parent />
    </StrictMode>,
    options,
  );
}
