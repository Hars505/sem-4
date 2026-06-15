import { useEffect, useState } from "react";

function UEI() {
  const [count, setCount] = useState(0);
  const [calculate, setCalc] = useState(0);
  useEffect(() => {
    alert("You Clicked SomeWhere on Browser.");
  });
  useEffect(() => {
    alert("Page is Loading For First Time.", []);
  });
  useEffect(() => {
    alert("Page is Loaded For First Time or When Button is Clicked.", [count]);
  });
  function changeCount() {
    setCount(count + 1);
  }
  function changeCalc() {
    setCalc(calculate + 1);
  }
  return (
    <>
      <button onClick={changeCount}>A{count}</button>
      <button onClick={changeCalc}>B{calculate}</button>
    </>
  );
}
export default UEI;
