import { useContext } from "react";
import { Fname } from "./Home";
function Comp() {
  const a = useContext(Fname);
  return (<p>{a} </p>);
}
export default Comp;
