import { useEffect, useState } from "react";
import axios from "axios";

function API() {
  const [dogImage, setDogImage] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random/w=300&h=200")
        .then((response) => {
          setDogImage(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching dog image:", error);
        });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <img src={dogImage} alt="Random dog" />;
}

export default API;
