import "./Counter.css";
import ButtomCircle from "../ButtonCircle/ButtonCircle";
import { useState } from "react";
import useCounter from "../../../core/constants/use-counter";

function Counter() {
  const { count, decrement, increment, reset, setCount } = useCounter();

  // const [count, setCount] = useState<number>(0);
  // const incrementCounter = () => {
  //   setCount(count + 1);
  // };
  const multiplyByTwo = () => {
    setCount((x) => x * 2)
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
          <ButtomCircle label="+" action={increment}></ButtomCircle>
        </div>
        <div className="p-2">
          <ButtomCircle label="-" action={decrement}></ButtomCircle>
        </div>
        <div className="p-2">
          <ButtomCircle label="o" action={reset}></ButtomCircle>
        </div>
        <div className="p-2">
          <ButtomCircle label="x" action={multiplyByTwo}></ButtomCircle>
        </div>
      </div>
    </div>
  );
}

export default Counter;
