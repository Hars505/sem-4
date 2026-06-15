import { useContext } from "react";
import { FirstName, LastName } from "./PC";

function C2() {
  const a = useContext(FirstName);
  const b = useContext(LastName);
  return (
    <p>
      {a} {b}
    </p>
  );
}
export default C2;
