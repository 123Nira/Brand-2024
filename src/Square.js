import React from "react";

const Square = ({ value, onHandleClick }) => {
  return (
    <button
      className="w-28 h-28 bg-blue-500 border-2 border-blue-700 flex items-center justify-center text-white text-2xl"
      onClick={onHandleClick}
    >
      {value}
    </button>
  );
};

export default Square;
