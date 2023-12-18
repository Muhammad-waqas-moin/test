import React, { useState } from "react";

const EvenOld = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <input
        type="Number"
        placeholder="Enter Nunber"
        value={inputValue}
        onChange={handleChange}
      ></input>
      {/* <h1>{`Input Value = ${inputValue}: ${
        inputValue && inputValue % 2 == 0 ? "even" : "old"
      }`}</h1> */}

      <h1>
        {" "}
        {inputValue
          ? inputValue % 2 == 0
            ? "even"
            : "old"
          : "Plz Enter Number"}
      </h1>
    </div>
  );
};

export default EvenOld;
