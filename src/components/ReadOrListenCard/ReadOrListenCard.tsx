import React from 'react';
import './ReadOrListenCard.scss';

export const ReadOrListenCard: React.FC = () => (
  <div className="ReadOrListenCard card">
    <h2 className="ReadOrListenCard__title title">
      Read or Listen
    </h2>

    <p className="ReadOrListenCard__text text">
      Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.
    </p>
  </div>
);