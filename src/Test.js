import React, { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("kiwi");
  const [todos, setTodos] = useState([{ text: "Learning Curve" }]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
