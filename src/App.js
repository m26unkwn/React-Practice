import { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(0);
  const oIncrement = (e) => {
    setData((prev) => prev + 1);
  };
  const oDecrement = (e) => {};

  return (
    <div>
      <button onClick={oIncrement} style={{ margin: "2rem", color: "green" }}>
        Increment
      </button>

      <span>{data}</span>

      <button onClick={oDecrement} style={{ margin: "2rem", color: "red" }}>
        Decrement
      </button>
    </div>
  );
};
export default App;
