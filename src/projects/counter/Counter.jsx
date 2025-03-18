import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice"; //features

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleClick = (operator) => {
    if (operator === "+") {
      if (count === 20) return;
      dispatch(increment());
    } else if (operator === "-") {
      if (count === 0) return;
      dispatch(decrement());
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-blue-950 flex-col gap-10">
      <div className="bg-gray-200 rounded-xl p-4 flex flex-col w-50 items-center justify-center gap-4">
        <button onClick={() => handleClick("+")} className="text-4xl">
          +
        </button>
        <p className="text-4xl">{count}</p>
        <button onClick={() => handleClick("-")} className="text-4xl">
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
