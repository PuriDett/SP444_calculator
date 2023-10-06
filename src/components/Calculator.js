import React, { useState } from "react";

function SimpleCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult((prevResult) => prevResult + Number(input));
    setInput("");
  };

  const handleSubtract = () => {
    setResult((prevResult) => prevResult - Number(input));
    setInput("");
  };

  const handleMultiply = () => {
    setResult((prevResult) => prevResult * Number(input));
    setInput("");
  };

  const handleDivide = () => {
    if (Number(input) !== 0) {
      setResult((prevResult) => prevResult / Number(input));
      setInput("");
    } else {
      alert("Cannot divide by zero!");
    }
  };

  const handleReset = () => {
    setResult(0);
  };

  const handleResetInput = () => {
    setInput("");
  };

  return (
    <div className="w-[450px] min-h-[100vh] place-items-center min-w-[300px]">
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="mb-5 text-3xl text-slate-600 uppercase font-bold tracking-wider">
          Simple Calculator
        </div>
        <div className="text-xl text-slate-600">Result : {result}</div>
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter number"
            value={input}
            onChange={handleInput}
          />
        </div>
        <div>
          <button
            onClick={handleAdd}
            className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
          >
            Add
          </button>
          <button
            onClick={handleSubtract}
            className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
          >
            Subtract
          </button>
          <button
            onClick={handleMultiply}
            className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
          >
            Multiply
          </button>
          <button
            onClick={handleDivide}
            className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
          >
            Divide
          </button>
        </div>
        <div className="inline-flex">
          <button
            onClick={handleReset}
            className="relative block w-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-800 sm:px-8 sm:py-3"
          >
            ResetResult
          </button>
          <button
            onClick={handleResetInput}
            className="relative block w-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-800 sm:px-8 sm:py-3"
          >
            ResetInput
          </button>
        </div>
      </div>
    </div>
  );
}
/*
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleResetInput}>ResetInput</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleResetInput}>ResetInput</button>
*/
export default SimpleCalculator;
