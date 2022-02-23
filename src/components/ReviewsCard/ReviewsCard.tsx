import React from 'react';
import './ReviewsCard.scss';

export const ReviewsCard: React.FC = () => (
  <div className="ReviewsCard card">
    <h2 className="ReviewsCard__title title">
      People love the Headway app
    </h2>

    <p className="ReviewsCard__text text">
      Become a member of our global community of <span>7 million people</span>
    </p>

    <div className="ReviewsCard__review review">
      <div className="review__stars"></div>

      <p className="review__text">
        This app simplifies books into super condensed but easy-to-digest snippets. Listened to almost all of the Art of Saying No during my warm up/stretch sesh today. A powerful tool I recommend to anyone who’s busy and can’t find time to sit down to read!
      </p>

      <div className="review__person person">
        <div className="person__photo person__photo--1"></div>
        <span className="person__nickname">mr.rageright</span>
        <div className="person__ig-logo"></div>
      </div>
    </div>

    <div className="ReviewsCard__review review">
      <div className="review__stars"></div>

      <p className="review__text">
        Headway app is one of the best investments I’ve ever made into myself outside of spiritual stuff. Summarized books that you can read or listen to!
      </p>

      <div className="review__person person">
        <div className="person__photo person__photo--2"></div>
        <span className="person__nickname">mcogbonna</span>
        <div className="person__ig-logo"></div>
      </div>
    </div>

    <div className="ReviewsCard__review review">
      <div className="review__stars"></div>

      <p className="review__text">
        In case you often find a book you just started — the Headway app is for you. It’s an audiobook reader that summarized all the key lessons in that great book you’ve been aspiring to read, but you didn’t finish.
      </p>

      <div className="review__person person">
        <div className="person__photo person__photo--3"></div>
        <span className="person__nickname">thefinestyler</span>
        <div className="person__ig-logo"></div>
      </div>
    </div>

    <div className="ReviewsCard__review review">
      <div className="review__stars"></div>

      <p className="review__text">
        So excited for my latest app subscription for self-growth! You can set reading goals, take challenges or read offline! 🤓
      </p>

      <div className="review__person person">
        <div className="person__photo person__photo--4"></div>
        <span className="person__nickname">thisinnagirl</span>
        <div className="person__ig-logo"></div>
      </div>
    </div>

    <div className="ReviewsCard__rating-card-container">
      <div className="ReviewsCard__rating-card">
        <div className="ReviewsCard__store-container">
          <span className="ReviewsCard__rating-score">4.7</span>

          <div className="ReviewsCard__store-logo"></div>
        </div>

        <div className="ReviewsCard__stars"></div>

        <span className="ReviewsCard__rating-number">
          50K ratings
        </span>
      </div>

      <div className="ReviewsCard__rating-card">
        <div className="ReviewsCard__store-container">
          <span
            className="
              ReviewsCard__rating-score
              ReviewsCard__rating-score--gplay
              "
          >
            4.2
          </span>

          <div className="ReviewsCard__store-logo ReviewsCard__store-logo--gplay"></div>
        </div>

        <div className="ReviewsCard__stars ReviewsCard__stars--gplay"></div>

        <span className="ReviewsCard__rating-number">
          31K ratings
        </span>
      </div>
    </div>
  </div>
);
