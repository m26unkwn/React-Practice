import { useState } from "react";
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState([]);
  const [Input, setInput] = useState("");

  const addList = (e) => {
    e.preventDefault();
    setTodo([...todo, Input]);
    setInput("");
  };

  const deleteList = (index, e) => {
    const todoList = Object.assign([], todo);
    todoList.splice(index, 1);
    setTodo([todoList]);
  };

  return (
    <>
      <input
        type='text'
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addList}>Add</button>
      <div>
        {todo.map((list, key) => (
          <>
            <div class='todoList' key={key}>
              <span>
                {list} <input type='checkbox' />
                <button onClick={deleteList}>delete</button>
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
