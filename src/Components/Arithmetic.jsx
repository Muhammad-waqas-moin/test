import React from "react";
import { useState } from "react";
import ButtonSign from "./Commen/ButtonSign";
const Arithmetic = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [Result, setResult] = useState(0);

  const [operator, setOperator] = useState("+");

  const signArr = ["+", "-", "*", "/"];

  const HandleChangeNum1 = (e) => {
    // console.log(e.target.value);
    setNum1(() => e.target.value | 0);
  };
  const HandleChangeNum2 = (e) => {
    // console.log(e.target.value);
    setNum2(() => e.target.value | 0);
  };
  const calFunc = (e) => {
    let val = e;
    let result = 0;
    // console.log(val);
    switch (true) {
      case val === "+":
        result = num1 + num2;
        console.log(result);
        break;
      case val === "-":
        result = num1 - num2;
        break;
      case val === "*":
        result = num1 * num2;
        break;
      case val === "/":
        result = num1 / num2;
        break;
      default:
        break;
    }
    setResult(() => result);
    setNum1("");
    setNum2("");
  };

  const calculateResults = (event) => {
    var originalString = event;
    var numberValue = originalString.replace(/"/g, "");
    // console.log(typeof numberValue);
    let expression = `${num1}${numberValue}${num2}`;
    console.log(eval(expression));
    setResult(eval(expression));

    // let o = event | 0;
    // console.log(operator);
    // var modifiedString = event.replace(/"/g, "");
    // console.log(modifiedString));
    // let myOperator = event | 0;
    // let myOperator = event && event | 0;
    // console.log(typeof myOperator);
    // console.log(typeof (event | 0));
    // setOperator(() => myOperator);
    // let expression = `${num1}${myOperator}${num2}`;
    // setResult(eval(expression));
    // console.log(expression);
    setNum1("");
    setNum2("");
    // console.log("run");
    // console.log(event.terget.innerHTML);
    // setResult(eval(expression));
    // console.log(eval(expression));
    // console.log(result);
  };
  return (
    <div className="flex  flex-col flex-wrap gap-4 justify-center items-center">
      <input
        type="number"
        value={num1}
        placeholder="Number one"
        onChange={HandleChangeNum1}
      />
      <input
        type="number"
        value={num2}
        placeholder="Number two"
        onChange={HandleChangeNum2}
      />

      <div className="flex gap-4">
        {signArr &&
          signArr.map((item, index) => {
            return (
              <ButtonSign
                btnText={item}
                styleClass={
                  "bg-amber-400 text-white  hover:bg-white hover:text-amber-400 text-md  border-1 duration-300 py-2 px-4"
                }
                Event={() => {
                  //   num1 && num2 && setResult(num1 + num2);
                  //   setNum1(""), setNum2("");
                  num1 && num2 && calculateResults(item);
                }}
              />
            );
          })}
      </div>
      {/* <ButtonSign
        btnText={"Add"}
        styleClass={
          "bg-amber-400 text-white  hover:bg-white hover:text-amber-400 text-xs  border-1 duration-300 py-2 px-4"
        }
        Event={() => {
          //   num1 && num2 && setResult(num1 + num2);
          //   setNum1(""), setNum2("");
          num1 && num2 && calFunc(num1 + num2);
          setNum1(""), setNum2("");
        }}
      /> */}
      <div className="flex justify-center item-center">
        <p className="text-white text-9xl ">{Result}</p>
      </div>
    </div>
  );
};

export default Arithmetic;
