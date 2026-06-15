import { useState } from "react";

function Test() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Medium");

  function demo(e) {
    setText(e.target.value);
  }
  function count5(e) {
    setCount(e.target.value);
  }
  function handleSize(e) {
    setSize(e.target.value);
  }

  return (
    <>
      TextArea: <textarea name="Text" value={text} onChange={demo} />
      <br />
      <p>You wrote: {text}</p>
      Pizza Count:{" "}
      <select onChange={count5} value={count} id="25">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <br />
      <p>Quantity : {count}</p>
      Pizza Size :{" "}
      <label>
        <input
          type="radio"
          name="pizzaSize"
          value="Small"
          checked={size === "Small"}
          onChange={handleSize}
        />{" "}
        Small
      </label>
      <label>
        <input
          type="radio"
          name="pizzaSize"
          value="Medium"
          checked={size === "Medium"}
          onChange={handleSize}
        />{" "}
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="pizzaSize"
          value="Large"
          checked={size === "Large"}
          onChange={handleSize}
        />{" "}
        Large
      </label>
      <br />
      <p>Selected Size : {size}</p>
    </>
  );
}

export default Test;
