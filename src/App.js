import { useState } from "react";
import Square from "./Square";

export default function App() {
  const [squareValue,setSquareValue] = useState("X")
  return (
    <div className="ml-[40rem] mt-52">
      <div className="flex">
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
      </div>
      <div className="flex">
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
      </div>
      <div className="flex">
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
        <Square value ={squareValue}/>
      </div>

    </div>
  );
}
