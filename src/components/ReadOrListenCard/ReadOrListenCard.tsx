import React, { useState } from 'react';
import './ReadOrListenCard.scss';
import cn from 'classnames';

export const ReadOrListenCard: React.FC = () => {
  const [buttonIsRead, setButtonIsRead] = useState(false);

  return (
    <div className="ReadOrListenCard card">
      <h2 className="ReadOrListenCard__title title">
        Read or Listen
      </h2>

      <p className="ReadOrListenCard__text text">
        Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.
      </p>

      <div className="ReadOrListenCard__button-container">
        <span
          className={cn({ active: !buttonIsRead })}
        >
          Listen
        </span>

        <div
          className={
            cn(
              'ReadOrListenCard__button',
              {
                'ReadOrListenCard__button--read': buttonIsRead,
              }
            )}
          onClick={() => setButtonIsRead(!buttonIsRead)}
        />

        <span
          className={cn({ active: buttonIsRead })}
        >
          Read
        </span>
      </div>

      <div
        className={cn(
          'ReadOrListenCard__image',
          {
            'ReadOrListenCard__image--read': buttonIsRead,
          }
        )}
      >
      </div>
    </div>
  );
};