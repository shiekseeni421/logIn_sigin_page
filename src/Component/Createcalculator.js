import React from "react";
import { useState } from "react";

import "../Style/Createcalculator.scss";

function Calculator() {
  let [Value1, setValue1] = useState("");
  let [FinalValue, setFinalValue] = useState("");
  let [displayValue, setDisplayValue] = useState("");
  let [operationValue, setOperation1] = useState("");

  function handelOperation(e) {
    let inputValue = e.target.value;
    let operationArray = ["+", "-", "*", "/", "+-"];

    let PresentValueOperation = operationArray.includes(inputValue);

    if (PresentValueOperation) {
      if (FinalValue !== "") {
        if (inputValue === "+-") {
          let sign = prompt("Enter + or -");
          setOperation1(sign);
        } else {
          setOperation1(inputValue);
        }
      } else {
        alert("Enter First Input Value");
      }
    }

    if (!PresentValueOperation && inputValue !== "C" && inputValue !== "+-") {
      if (operationValue === "") {
        setFinalValue(FinalValue + inputValue);
        setDisplayValue(FinalValue + inputValue);
      } else {
        setValue1(Value1 + inputValue);
        setDisplayValue(Value1 + inputValue);
      }
    }

    if (inputValue === "C") {
      setFinalValue("");
      setDisplayValue("");
      setOperation1("");
      setValue1("");
    }
  }

  function EqualOP() {
    let result = FinalValue;
    let Value2 = Value1;
    let operator = operationValue;
    if (result === "" || Value2 === "" || operator === "") {
      alert("please Enter values ");
    } else {
      result = Number(FinalValue);
      Value2 = Number(Value1);
      operator = operationValue;
      switch (operator) {
        case "+":
          result += Value2;
          setFinalValue(result);
          setDisplayValue(result);
          setValue1("");
          break;
        case "*":
          result *= Value2;
          setFinalValue(result);
          setDisplayValue(result);
          setValue1("");
          break;
        case "/":
          result /= Value2;
          setFinalValue(result);
          setDisplayValue(result);
          setValue1("");
          break;
        default:
          result -= Value2;
          setFinalValue(result);
          setDisplayValue(result);
          setValue1("");
      }
    }
  }

  function handelPercentage() {
    // alert("%");
    let GetValue = Number(FinalValue);
    let result = GetValue / 100;
    // alert(result);
    setDisplayValue(result);
    setFinalValue(result);
  }

  return (
    <div className="WrapperContainer">
      <div className="DisplayButton-Container">
        <div className="DisplayContainer"> {displayValue}</div>
        <div className="ButtonContainer">
          <button className="buttonel" value="C" onClick={handelOperation}>
            C
          </button>
          <button className="buttonel" value="+-" onClick={handelOperation}>
            +-
          </button>
          <button className="buttonel" value="%" onClick={handelPercentage}>
            %
          </button>
          <button className="buttonel" value="/" onClick={handelOperation}>
            /
          </button>
          <button className="buttonel" value="7" onClick={handelOperation}>
            7
          </button>
          <button className="buttonel" value="8" onClick={handelOperation}>
            8
          </button>
          <button className="buttonel" value="9" onClick={handelOperation}>
            9
          </button>
          <button className="buttonel" value="*" onClick={handelOperation}>
            *
          </button>
          <button className="buttonel" value="4" onClick={handelOperation}>
            4
          </button>
          <button className="buttonel" value="5" onClick={handelOperation}>
            5
          </button>
          <button className="buttonel" value="6" onClick={handelOperation}>
            6
          </button>
          <button className="buttonel" value="-" onClick={handelOperation}>
            -
          </button>
          <button className="buttonel" value="1" onClick={handelOperation}>
            1
          </button>
          <button className="buttonel" value="2" onClick={handelOperation}>
            2
          </button>
          <button className="buttonel" value="3" onClick={handelOperation}>
            3
          </button>
          <button className="buttonel" value="+" onClick={handelOperation}>
            +
          </button>
          <button className="buttonel" value="0" onClick={handelOperation}>
            0
          </button>
          <button className="buttonel" value="." onClick={handelOperation}>
            .
          </button>
          <button className="buttonel equalButt" onClick={EqualOP}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
