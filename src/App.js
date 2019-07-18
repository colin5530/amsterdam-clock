import React from 'react';
import amsterdam from './amsterdam.jpg';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={amsterdam}  alt="amsterdam" />
        <p>Time to Amsterdam:</p>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
