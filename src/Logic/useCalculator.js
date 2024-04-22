import { useState } from "react";

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const inputDigit = (digit) => {
    if (displayValue === "0") {
      setDisplayValue(String(digit));
    } else {
      setDisplayValue(displayValue + String(digit));
    }
  };

  const inputDot = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const performOperation = {
    "/": (prevOperand, nextOperand) => prevOperand / nextOperand,
    "*": (prevOperand, nextOperand) => prevOperand * nextOperand,
    "+": (prevOperand, nextOperand) => prevOperand + nextOperand,
    "-": (prevOperand, nextOperand) => prevOperand - nextOperand,
  };

  const inputOperator = (nextOperator) => {
    const nextOperand = parseFloat(displayValue);

    if (operand == null) {
      setOperand(nextOperand);
    } else if (operator) {
      const currentValue = operand || 0;
      const newValue = performOperation[operator](currentValue, nextOperand);

      setOperand(newValue);
      setDisplayValue(String(newValue));
    }

    if (nextOperator !== "=") {
      setOperator(nextOperator);
      setDisplayValue("0");
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
  };
}
