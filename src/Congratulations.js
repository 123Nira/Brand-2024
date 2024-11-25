import React from "react";

const Congratulations = ({setIsFlag}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-50">
        <h1 className="text-4xl font-bold text-green-600">Congratulations!</h1>
        <p className="text-xl text-gray-800 mt-4">You are the Winner!</p>
        <button
          className="text-xl text-gray-800 mt-4"
          onClick={() => setIsFlag(false)}
        >
          Play again!
        </button>
      </div>
    </>
  );
};
export default Congratulations;
