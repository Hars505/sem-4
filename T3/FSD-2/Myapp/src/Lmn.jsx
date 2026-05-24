import "./App.css";
import img1 from "./assets/react.svg";
function Lmn() {
  const name = "Kavan";
  function demo() {
    alert("Welcome to LJ");
  }
  function inp(){
    var x = document.getElementById("#j2").value
    console.log(x);
  }
  return (
    <>
      <button
        onClick={demo}
        style={{
          color: "blue",
          textcolor: "White",
          "background-color": "red",
          "font-size":"48px"
        }}
      >
        {" "}
        click me{" "}
      </button>
      Type here 
      <input name="text" id="#j2" type="text" onInput={inp}/>
    </>
  );
}
export default Lmn;
