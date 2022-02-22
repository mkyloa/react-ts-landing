import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { BetterYou } from './components/BetterYou';
import { GetSmarterCard } from './components/GetSmarterCard';
import { SummaryCard } from './components/SummaryCard';
import { ReadOrListenCard } from './components/ReadOrListenCard';
import { GetStartedButton } from './components/GetStartedButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <BetterYou />
        <GetSmarterCard />
        <SummaryCard />
        <ReadOrListenCard />
        <GetStartedButton />
      </div>
    </div>
  );
};

export default App;
