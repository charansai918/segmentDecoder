

// import React from 'react'
import React, { useEffect, useState } from "react";
// import "./App.css";

function Simulation() {
  const [value, setValue] = useState(0);
  const [onBtn, setOnBtn] = useState([]);
  const [imagePath, setImagePath] = useState("./images/img3.jpg");

  const [onFive, setOnFive] = useState(true);
  const [onThree, setOnThree] = useState(true);
  const [onFour, setOnFour] = useState(true);

  useEffect(() => {
    if (value === 0) {
      setImagePath("./images/zero.jpg");
    } else if (value == 1) {
      setImagePath("./images/one.jpg");
    } else if (value == 2) {
      setImagePath("./images/twelve.jpg");
    } else if (value == 3) {
      setImagePath("./images/three.jpg");
    } else if (value == 4) {
      setImagePath("./images/four.jpg");
    } else if (value == 5) {
      setImagePath("./images/five.jpg");
    } else if (value == 6) {
      setImagePath("./images/six.jpg");
    } else if (value == 7) {
      setImagePath("./images/seven.jpg");
    } else if (value == 8) {
      setImagePath("./images/eight.jpg");
    } else if (value == 9) {
      setImagePath("./images/nine.jpg");
    } else {
      setImagePath("./images/img3.jpg");
    }
  }, [value]);

  console.log(imagePath)

  const toggle = (number) => {
    console.log(number, value, imagePath);
    const isAvailable = onBtn.includes(number);
    if (isAvailable) {
      const index = onBtn.indexOf(number);
      onBtn.splice(index, 1);
      setValue(value - number);
    } else {
      setOnBtn([...onBtn, number]);
      setValue(value + number);
    }
  };

  return (
    <div className="simulation">
      <div>
        <img src="./images/circuit.jpg" alt="image" />
      </div>

      <div className="led">
        <img
          id="myimage"
          src={imagePath}
          width="100"
          height="180"
          alt="Light"
        />
      </div>

      <div className="four_buton">
        <img
          onClick={() => setOnFour(!onFour)}
          src={!onFour ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="six_button">
        <img
          onClick={() => toggle(8)}
          src={!onBtn.includes(8) ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="two_button">
        <img
          onClick={() => toggle(4)}
          src={!onBtn.includes(4) ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="one_button">
        <img
          onClick={() => toggle(2)}
          src={!onBtn.includes(2) ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="seven_button">
        <img
          onClick={() => toggle(1)}
          src={!onBtn.includes(1) ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="three_button">
        <img
          onClick={() => setOnThree(!onThree)}
          src={!onThree ? "./images/off.png" : "./images/on.png"}
        />
      </div>

      <div className="five_button">
        <img
          onClick={() => setOnFive(!onFive)}
          src={!onFive ? "./images/off.png" : "./images/on.png"}
        />
      </div>
    </div>
  );
}

export default Simulation;
