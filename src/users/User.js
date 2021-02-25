import React from "react";

export const User = (props) => {
  return (
    <li>
      <span>
        Name: {props.user} AGE: {props.Age}
      </span>

      <input onChange={props.changeEvent} value={props.userName} />
      <input onChange={props.changeAge} value={props.age} />

      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};
