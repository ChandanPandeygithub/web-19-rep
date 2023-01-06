import React from "react";
import { useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const reduce = useDispatch();

  return (
    <div data-testid="counterButtons">
      <button onClick={()=>{reduce(handleAddActionObj(1))}} data-testid="addButton">ADD</button>
      <button onClick={()=>{reduce(handleReduceActionObj(1))}} data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
