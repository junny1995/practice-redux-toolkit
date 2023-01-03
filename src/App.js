import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const minus = () => {
    setCount((prev) => prev - 1);
  };
  const plus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={minus}>-</button>
      <span>Value: {count}</span>
      <button onClick={plus}>+</button>
    </>
  );
}

export default App;
