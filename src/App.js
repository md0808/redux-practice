import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Hello world with redux</h1>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={() => dispatch(increment(5))}> +</button>
        <button onClick={() => dispatch(decrement())}> -</button>
      </div>
      {isLogged ? (
        <h4>Valuable information I shouldn't see if I'm not logged in</h4>
      ) : (
        <></>
      )}
      <h4>Non valuable information</h4>
    </div>
  );
}

export default App;
