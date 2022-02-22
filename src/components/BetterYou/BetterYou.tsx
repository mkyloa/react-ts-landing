import React from 'react';
import './BetterYou.scss';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import lottieJson from '../../lottie/lottie.json';

export const BetterYou: React.FC = () => (
  <div className="BetterYou card">
    <h2 className="BetterYou__title title">
      Become a better you
    </h2>

    <p className="BetterYou__text">
      with 15-min bite-sized reads and audios of the world’s best nonfiction books
    </p>

    <Lottie
      className='BetterYou__lottie'
      play
      loop={false}
      speed={0.75}
      animationData={lottieJson}
    />

    <div className="BetterYou__image"></div>
  </div>
);