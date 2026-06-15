import { createContext } from "react";
import Display from "./Display";
const String = createContext();
function Num2Comp() {
  return (
    <>
      <String.Provider value={"Hello World!!! \n\nStudent"}>
        <Display />
      </String.Provider>
    </>
  );
}
export default Num2Comp;
export { String };
