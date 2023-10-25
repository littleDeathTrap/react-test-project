import { useReducer, useState } from "react";

const CountUseReducer = () => {
  const [value, setValue] = useState(0);

  const initialState = {
    value: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 };
      case "DECREMENT":
        return { value: state.value - 1 };
      case "RESET":
        return { value: 0 };
      case "INCREMENT_BY_VALUE":
        return { value: state.value + Number(action.payload) };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleIncrementByValue = () => {
    dispatch({
      type: "INCREMENT_BY_VALUE",
      payload: value,
    });
  };

  return (
    <div>
      <h1>Counter: {state.value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={handleIncrementByValue}>Increment by value</button>
      </div>
    </div>
  );
};
export default CountUseReducer;
