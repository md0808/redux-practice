import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION = describes what you want to do
// const increment = () => {
//   return {
//     type: "increment",
//   };
// };

// const decrement = () => {
//   return {
//     type: "decrement",
//   };
// };

// //REDUCER describes how actions change state into new state - checks actions to see what happens and modifies
// // passing in initial state as arguemnt
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //STORE = global state
// let store = createStore(counter);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// //DISPATCH sends action to the reducer, reducer checks what to do
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
