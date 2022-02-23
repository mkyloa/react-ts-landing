import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { BetterYou } from './components/BetterYou';
import { GetSmarterCard } from './components/GetSmarterCard';
import { SummaryCard } from './components/SummaryCard';
import { ReadOrListenCard } from './components/ReadOrListenCard';
import { ReviewsCard } from './components/ReviewsCard';
import { SocialMediaCard } from './components/SocialMediaCard';
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
        <ReviewsCard />
        <SocialMediaCard />
        <GetStartedButton />
      </div>
    </div>
  );
};

export default App;
