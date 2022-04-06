import React from "react";
import ReactDOM from "react-dom";

const fname = "Mirka";
const lname = "McQueen";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
