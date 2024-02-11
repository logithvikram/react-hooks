import React, { useReducer } from "react";

export default function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1, showText: state.showText };
      case "toggle":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
          dispatch({ type: "toggle" });
        }}
      >
        Click
      </button>
      {state.showText && <p>This is logic</p>}
    </div>
  );
}
