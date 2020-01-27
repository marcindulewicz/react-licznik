import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Licznik React z krokiem</h1>
        <Counter  defLicznik='108'/>
      </header>
    </div>
  );
}

export default App;
