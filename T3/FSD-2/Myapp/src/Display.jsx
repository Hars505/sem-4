import { useContext } from "react";
import { CSS } from "./CSS";
import { String } from "./Num2";
function Display() {
  const a = useContext(String);
  const b = useContext(CSS);
  return <p style={b}>{a}</p>;
}
export default Display;
