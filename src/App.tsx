import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value); //consuming state / state: current state, counter: from store
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex items-center p-6 border border-slate-400 bg-slate-200 rounded gap-6 ">
          <button
            onClick={() => dispatch(decrement())} // sending action
            className="bg-green-600 text-white px-3 py-2 rounded-xl"
          >
            Decrement
          </button>
          <p className="text-xl text-slate-700">{count}</p>
          <button
            onClick={() => dispatch(increment())}
            className="bg-red-600 text-white px-3 py-2 rounded-xl"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByAmount({ value: 3 }))}
            className="bg-blue-600 text-white px-3 py-2 rounded-xl"
          >
            Increment by 3
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
