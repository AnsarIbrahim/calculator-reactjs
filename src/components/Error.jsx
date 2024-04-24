import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center text-red-500">
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default Error;
