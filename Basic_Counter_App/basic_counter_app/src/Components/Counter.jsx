import React from "react";
import {useSelector} from "react-redux";

import CounterButtons from "./CounterButtons";
const Counter = () => {
    const counter = useSelector(store=>store.counter)
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
             {counter}
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
