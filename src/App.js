import './App.css';
import Effect from './Effect';
import Reducer from './Reducer';
import Ref from './Ref';
import UseState from './UseState';

function App() {
  return (
    <div className="App">
    <div className='useState'> 
      <h1>useState</h1>
     <>
     <UseState/>
     </>
     </div><>
     </>
     <div className='useReducer'>
      <h1>useReducer</h1>
       <Reducer/>
     </div>
     <div className='useEffect'>
      <h1>useEffect</h1>
       <Effect/>
     </div>
     <div className='useRef'>
      <h1>useRef</h1>
       <Ref/>
     </div>
    </div>
  );
}

export default App;
