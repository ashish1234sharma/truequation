import React, { useState, useEffect } from "react";
import "./calculator.css";

export const Calculator = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  var arr = [];
  arr.push(input);

  localStorage.setItem("calc", JSON.stringify(arr));

  var calc = JSON.parse(localStorage.getItem("calc"));
  console.log(data);

  const handleButton = (number) => {
    const n = number;

    setInput(n);
    setData(input);
  };
//   useEffect(() => {
    
//   }, [input]);
  //   setData(input)

  const handleCalculation = () => {
    setData(eval.input);
  };

  return (
    <div className="calculator">
      <div className="input">{data}</div>

      <div className="buttons">
        <button onClick={() => handleButton(1)}>1</button>
        <button onClick={() => handleButton(2)}>2</button>
        <button onClick={() => handleButton(3)}>3</button>
        <button onClick={() => handleButton("+")}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => handleButton(4)}>4</button>
        <button onClick={() => handleButton(5)}>5</button>
        <button onClick={() => handleButton(6)}>6</button>
        <button onClick={() => handleButton("-")}>-</button>
      </div>
      <div className="buttons">
        <button onClick={() => handleButton(7)}>7</button>
        <button onClick={() => handleButton(8)}>8</button>
        <button onClick={() => handleButton(9)}>9</button>
        <button onClick={() => handleButton("*")}>X</button>
      </div>
      <div className="buttons">
        <button className="mod" onClick={() => handleButton("m")}>
          mod
        </button>
        <button onClick={() => handleButton(0)}>0</button>
        <button onClick={handleCalculation}>=</button>
        <button className="square" onClick={() => handleButton("s")}>
          square
        </button>
      </div>
    </div>
  );
};
