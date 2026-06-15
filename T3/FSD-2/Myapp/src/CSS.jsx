import { createContext } from "react";
import Num2 from "./Num2";
const CSS = createContext();
function Num1Comp() {
  const myStyles = { color: "Green", fontSize: "50px", fontWeight: "bold,Italic" };
  return (
    <>
      <CSS.Provider value={myStyles}>
        <Num2 />
      </CSS.Provider>
    </>
  );
}
export default Num1Comp;
export { CSS };
