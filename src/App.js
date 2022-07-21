import './App.css';
import ComplexList from './components/ComplexList/ComplexList'
import React, {useState} from 'react'
import states from './data/data'


function App() {
  const [data, setData]=useState(states)
  return (
    <div className="App">
      <ComplexList type={"state"} data={states}/>
    </div>
  );
}

export default App;
