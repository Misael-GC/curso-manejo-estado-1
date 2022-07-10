import React from 'react';
import { UseState  } from './UseState.js';
import { ClassState } from './ClassState.js'
import './App.css';

function App() {
  return (
    <div className="App">
    {/* props propiedad name  */}
      <UseState name='Use State'/>
      <ClassState name="Class State"/>
    </div>
  );
}

export default App;
