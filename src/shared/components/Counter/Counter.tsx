import "./Counter.css";
import ButtomCircle from "../ButtonCircle/ButtonCircle";
import useCounter from "../../../core/constants/use-counter";
import { useRef, useState } from "react";

function Counter() {
  const [data, setData] = useState<number[]>([]);
  const inputFiel = useRef(null);
  const { count, decrement, increment, reset, setCount } = useCounter();
  const multiplyByTwo = () => {
    setCount((x) => x * 2);
  };
  const onChangeInput = (e: any) => {
    setCount(() => parseInt(e.target.value));
  };
  const onClickAdd = () => {
    setData((value) => [...value, (inputFiel.current as any).value])
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-center align-items-center">
        <label className="p-2">
          <b>Cantidad: </b>
        </label>
        <div style={{ minWidth: "100px" }}>
          <input
            ref={inputFiel}
            required
            type="number"
            className="form-control"
            onChange={onChangeInput}
            value={count?.toFixed(2)}
          />
        </div>
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
      <div className="mt-3">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickAdd}
          >
            Agregar
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="d-flex justify-content-center">
          <ul>
            {data?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Counter;
