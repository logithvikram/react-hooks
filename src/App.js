import './App.css';
import Effect from './Effect';
import Layout from './Layout';
import Reducer from './Reducer';
import Ref from './Ref';
import UseState from './UseState';
import Context, { AppContext } from './Usecontext/Context';
import Handle from './imperative/Handel';

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
     <div className='useLayout'>
      <h1>useLayout</h1>
       <Layout/>
     </div>
     <div className='UseImperativeHandle'>
      <h1>UseImperativeHandle</h1>
       <Handle/>
     </div>
     <div className='UseContext'>
      <h1>UseContext</h1>
       <Context/>
     </div>
    </div>
  );
}

export default App;
