import { useState } from "react";

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [newInput, setNewInput] = useState(true);

  const inputDigit = (digit) => {
    if (newInput) {
      setDisplayValue(String(digit));
    } else {
      setDisplayValue(displayValue + String(digit));
    }
    setNewInput(false);
  };

  const inputDot = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setOperator(null);
    setOperand(null);
  };

  const performOperation = {
    "÷": (prevOperand, nextOperand) => prevOperand / nextOperand,
    "*": (prevOperand, nextOperand) => prevOperand * nextOperand,
    "+": (prevOperand, nextOperand) => prevOperand + nextOperand,
    "-": (prevOperand, nextOperand) => prevOperand - nextOperand,
    "+/-": (prevOperand) => prevOperand * -1,
    "%": (prevOperand) => prevOperand / 100,
  };

  const inputOperator = (nextOperator) => {
    if (!performOperation.hasOwnProperty(nextOperator)) {
      console.error(`Invalid operator: ${nextOperator}`);
      return;
    }

    const nextOperand = parseFloat(displayValue);

    if (nextOperator === "+/-" || nextOperator === "%") {
      const newValue = performOperation[nextOperator](nextOperand);
      setDisplayValue(String(newValue));
      setNewInput(true);
    } else {
      if (operator && operand !== null) {
        const newValue = performOperation[operator](operand, nextOperand);
        setOperand(newValue);
        setDisplayValue(String(newValue));
      } else {
        setOperand(nextOperand);
      }

      setOperator(nextOperator);
      setNewInput(true);
    }
  };

  const computeResult = () => {
    if (operator && operand !== null) {
      const nextOperand = parseFloat(displayValue);
      const newValue = performOperation[operator](operand, nextOperand);
      setOperand(newValue);
      setDisplayValue(String(newValue));
      setOperator(null);
      setNewInput(true);
    }
  };

  return {
    displayValue,
    operator,
    operand,
    inputDigit,
    inputDot,
    clearDisplay,
    inputOperator,
    computeResult,
  };
}
