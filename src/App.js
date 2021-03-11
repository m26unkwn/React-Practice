import React, { useState } from "react";

import { NumberList } from "./components/NumberList";

const App = () => {
  const [open, setOpen] = useState(false);

  const buttonToggle = () => {
    setOpen(!open);
  };

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const incrementNumber = () => {
    const endNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, endNumber + 1]);
  };
  return (
    <div>
      <button onClick={buttonToggle}>CLICK</button>
      <p>{open ? "opened" : "closed"}</p>
      <button onClick={incrementNumber}>Add</button>
      <ul>
        <NumberList numbers={numbers} />
      </ul>
    </div>
  );
};

export default App;
