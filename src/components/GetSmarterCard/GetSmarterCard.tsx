import React from 'react';
import './GetSmarterCard.scss';

export const GetSmarterCard: React.FC = () => (
  <div className="GetSmarterCard card">
    <h2 className="BetterYou__title">
      Get smarter with the least effort
    </h2>

    <div className="GetSmarterCard__image GetSmarterCard__image--publications"></div>

    <h3 className="GetSmarterCard__subtitle subtitle">
      Learn from the best
    </h3>

    <p className="GetSmarterCard__text text">
      Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.
    </p>

    <div className="GetSmarterCard__image GetSmarterCard__image--lightning-cards"></div>

    <h3 className="GetSmarterCard__subtitle subtitle">
      Get key insights
    </h3>

    <p className="GetSmarterCard__text text">
      Major ideas in a bite-sized form. Long reads no more!
    </p>

    <div className="GetSmarterCard__image GetSmarterCard__image--daily-goals"></div>

    <h3 className="GetSmarterCard__subtitle subtitle">
      Build a reading habit
    </h3>

    <p className="GetSmarterCard__text text">
      Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!
    </p>
  </div>
);