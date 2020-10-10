import React from 'react';
import '../css/App.css';
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
      <Canvas width={256} height={128}/>
    </div>
  );
}

export default App;
