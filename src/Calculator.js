import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");  // To hold the current input expression
  const [output, setOutput] = useState(""); // To hold the result/output of the calculation

  // Handle button clicks (numbers and operators)
  const handleButtonClick = (value) => {
    setInput(input + value);  // Append the clicked value (number or operator) to input
  };

  // Handle clearing the input and output
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  // Handle the equal button (evaluate the expression)
  const handleEvaluate = () => {
    try {
      // Check if dividing by zero
      if (input.includes("/0")) {
        setOutput("Infinity");
      } else {
        // Evaluate the expression using BODMAS
        const result = eval(input);  // Using eval to evaluate the expression
        if (Number.isNaN(result)) {
          setOutput("NaN");  // If it's NaN, display 'NaN'
        } else {
          setOutput(result); // Display the result
        }
      }
    } catch (error) {
      setOutput("Error"); // If there's an error in the expression (e.g., invalid format), display 'Error'
    }
  };

  return (
    <div className="calculator">
      {/* Heading for the Calculator */}
      <h1>React Calculator</h1>
      
      {/* Display the input expression */}
      <input 
        type="text" 
        value={input} 
        readOnly 
        placeholder="0"
      />
      
      {/* Display the output/result */}
      <div className="output">
        <p>Result: {output}</p> {/* Ensure this line is properly closed */}
      </div>

      {/* Buttons for numbers and operations */}
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
