import React from "react";
import Button from "./Button";
import useCalculator from "../Logic/useCalculator";

const Calculator = () => {
  const {
    displayValue,
    inputDigit,
    inputDot,
    clearDisplay,
    inputOperator,
    computeResult,
  } = useCalculator();

  return (
    <div className="flex flex-col items-center justify-center mt-5 bg-gray-100 w-[90%] mx-auto rounded-lg shadow-md">
      <h2 className="sm:text-2xl text-sm font-semibold mb-5 mt-3">
        Ready to Crunch Some Numbers?
      </h2>
      <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-20 flex flex-col">
        <div className="mb-4">
          <div
            data-testid="display"
            className="border p-2 text-right bg-slate-200 rounded-md"
          >
            {displayValue}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "AC",
            "+/-",
            "%",
            "÷",
            7,
            8,
            9,
            "*",
            4,
            5,
            6,
            "-",
            1,
            2,
            3,
            "+",
            0,
            ".",
            "=",
          ].map((value) => {
            if (value === "AC") {
              return (
                <Button
                  key={value}
                  value={value.toString()}
                  handleClick={clearDisplay}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                />
              );
            }
            if (value === "=") {
              return (
                <Button
                  key={value}
                  value={value.toString()}
                  handleClick={computeResult}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                />
              );
            }
            if (["÷", "*", "+", "-", "+/-", "%"].includes(value)) {
              return (
                <Button
                  key={value}
                  value={value.toString()}
                  handleClick={() => inputOperator(value)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                />
              );
            }
            if (value === 0) {
              return (
                <Button
                  key={value}
                  value={value.toString()}
                  handleClick={() => inputDigit(value)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
                />
              );
            }
            return (
              <Button
                key={value}
                value={value.toString()}
                handleClick={value === "." ? inputDot : () => inputDigit(value)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
