import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value); //consuming state / state: current state, counter: from store
  const dispatch = useDispatch();
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
        </div>
      </div>
    </>
  );
}

export default App;
