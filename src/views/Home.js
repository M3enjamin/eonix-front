import React from "react";
import "./Home.css";

function Home({ onIncrement, onDecrement, counter }) {
  return (
    <div className="wrapper">
      <span className="counter">{counter}</span>
      <div className="buttons">
        <button onClick={onDecrement}>&#8722;</button>
        <button onClick={onIncrement}>&#43;</button>
      </div>
    </div>
  );
}

export default Home;
