import React from 'react';
import './BetterYou.scss';
// import { Player } from '@lottiefiles/react-lottie-player';

export const BetterYou: React.FC = () => (
  <div className="BetterYou">
    <h2 className="BetterYou__title">
      Become a better you
    </h2>

    <p className="BetterYou__subtitle">
      with 15-min bite-sized reads and audios of the world’s best nonfiction books
    </p>

    {/* <Player
      autoplay

      src="https://assets9.lottiefiles.com/packages/lf20_jxqxrivg.json"
      style={{ height: '300px', width: '300px' }}
    /> */}
  </div>
);