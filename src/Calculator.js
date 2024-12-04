import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");  
  const [output, setOutput] = useState(""); 

  
  const handleButtonClick = (value) => {
    setInput(input + value); 
  };

  
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  
  const handleEvaluate = () => {
    try {
      
      if (/[\+\-\*\/]$/.test(input)) {
        setOutput("Error");  
        return;
      }

      
      if (input.includes("/0") && !input.includes("0/0")) {
        setOutput("Infinity");  // 
      } else if (input === "") {
        setOutput("Error"); // 
      } else {
        
        const result = eval(input); 
        if (Number.isNaN(result)) {
          setOutput("NaN");  
        } else {
          setOutput(result); 
        }
      }
    } catch (error) {
      setOutput("Error"); 
    }
  };

  return (
    <div className="calculator">
      
      <h1>React Calculator</h1>
      
     
      <input 
        type="text" 
        value={input} 
        readOnly 
        placeholder="0"
      />
      
      
      <div className="output">
        <p>Result: {output}</p>
      </div>

      
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        {/* Clear button */}
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
};

export default Calculator;
