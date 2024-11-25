import React from "react";

const Square = ({value}) => {
  return (
    <button className='className=" w-28 h-28 bg-blue-500 border-2 border-blue-700 flex items-center justify-center text-white text-2xl"'>
      {value}
    </button>
  );
};

export default Square;
