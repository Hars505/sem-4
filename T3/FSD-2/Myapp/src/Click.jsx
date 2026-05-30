import { useState } from "react";
function Click() {
  const [pasta, setPasta] = useState(2);
  const [imageIndex, setImageIndex] = useState(0);
  const [buttonName, setButtonName] = useState("Change Name");
  const [textColor, setTextColor] = useState("black");
  const [showText, setShowText] = useState(true);
  const images = [
    "/image_0.jpg",
    "/image_1.jpg",
    "/image_2.jpg",
    "/image_3.jpg",
    "/savedWallpaper.jpg",
    "/anime-style-mountains-landscape.jpg",
    "../src/assets/vite.svg",
    "../src/assets/react.svg",
    "../src/assets/hero.png",
    "../src/assets/ytLogo.png",
    "../src/assets/darkMode.png"
  ];
  
  function demo() {
    if (pasta < 10) setPasta(pasta + 1);
  }
  function demo1() {
    if (pasta > 0) setPasta(pasta - 1);
  }
  function ChangeName(){
    setButtonName(buttonName === "Change Name" ? "Kamal" : "Raval" );
  }
  function ChangeColor(){
    setTextColor(textColor === "black" ? "red" : textColor === "red" ? "blue" : "black");
  }
  function Hide(){
    setShowText(!showText);
  }
  function changeImage() {
    setImageIndex(Math.floor(Math.random() * images.length));
  }
  return (
    <>
      <button onClick={demo}>
        Like 👍❤️ <h2>{pasta}</h2>
      </button>{" "}
      <br />
      <br />
      <button onClick={demo1}>
        DisLike 👎💔 <h2>{pasta}</h2>
      </button>
      <br />
      <br />
      <button onClick={changeImage}> click To Change</button>
      <br />
      <br />
      <img
        src={images[imageIndex]}
        alt="new Image"
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <button onClick={ChangeName}>Click TO Change Name</button><br /><br />
      <button onClick={ChangeColor}>Change Color</button><br /><br />
      <button onClick={Hide}>{showText ? "Hide" : "Show"}</button>
      {showText && <h2 style={{ color: textColor }}>{buttonName}</h2>}
      <br />
    </>
  );
}
export default Click;