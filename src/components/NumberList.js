import React from "react";

export const NumberList = (props) => {
  return (
    <div>
      {props.numbers.map((number) => (
        <li>{number}</li>
      ))}
    </div>
  );
};
