import "./Counter.css";
import ButtomCircle from "../ButtonCircle/ButtonCircle";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
      if (count > 0) {
        setCount(count - 1);
      }
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-center">
        <label>
          <b>Cantidad: </b>
        </label>
        <label>{count}</label>
      </div>
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <ButtomCircle label="+" action={incrementCounter}></ButtomCircle>
        </div>
        <div className="p-2">
          <ButtomCircle label="-" action={decrementCounter}></ButtomCircle>
        </div>
      </div>
    </div>
  );
}

export default Counter;
