import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./countSlice";

function App() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <>
      <button type="submit" onClick={() => dispatch(minus())}>
        -
      </button>
      <span>Value: {count}</span>
      <button type="submit" onClick={() => dispatch(plus())}>
        +
      </button>
    </>
  );
}

export default App;
