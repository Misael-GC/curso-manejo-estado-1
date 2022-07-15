import React from 'react';
import { UseState  } from './UseState.js';
import { UseReducer } from './UseReducer.js';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* props propiedad name  */}
      <UseState name='Use State'/>
      <UseReducer name="Use Reducer"/>
    </div>
  );
}

export default App;
