import React from "react";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
};

export default function Reducer() {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        -
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        +
      </button>
    </div>
  );
}
