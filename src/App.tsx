import React from 'react';
import './App.scss';
import { BetterYou } from './components/BetterYou';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <BetterYou />
      </div>
    </div>
  );
}

export default App;
