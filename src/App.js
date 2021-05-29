import React, { useState } from "react";
import "./styles.css";

let count = 0;

export default function App() {
  const [count1, setCount] = useState("");
  const [increment1, setIncrement] = useState("");

  function increment() {
    count += 1;
    setIncrement(count);
  }

  function save() {
    let countStr = count;
    setCount(countStr);
    count = 0;
  }
  return (
    <div className="App">
      <h1>People entered:</h1>
      <h2 id="count-el">{increment1}</h2>
      <button id="increment-btn" onClick={increment}>
        INCREMENT
      </button>
      <button id="save-btn" onClick={save}>
        SAVE
      </button>
      <p id="save-el">Previous entries: {count1} </p>
    </div>
  );
}
