import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  
  const num = useSelector((state)=>{return state.count});
console.log(num);
const dispatch = useDispatch();
  return (
    <div className='text-center mt-5'>
      <h2>{num}</h2>
      <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
      
      <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
