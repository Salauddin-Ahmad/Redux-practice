
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDsipatch, useAppSelector } from './redux/hook';


function App() {

  const dispatch = useAppDsipatch();

  const {count} = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment({amount}));
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <>
      <div>
        <h1> Counter with Redux</h1>
        <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <div className=''>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>

      </div>
      
    </>
  )
}

export default App
