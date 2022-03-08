import React from 'react';
import './GoalsCard.scss';

export const GoalsCard: React.FC = () => {
  return (
    <div className="GoalsCard card">
      <h2 className="GoalsCard__title title">
        Determine your goal and go ahead!
      </h2>

      <p className="GoalsCard__text text">
        Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.
      </p>

      <div className="GoalsCard__categories">
        <ul className='GoalsCard__grid'>
          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              All categories
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--1
                "
              />
              Self-Growth
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--2
                "
              />
              Happiness
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--3
                "
              />
              Money & Investment
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--4
                "
              />
              Negotiation
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--5
                "
              />
              Health
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--6
                "
              />
              Spirituality
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--7
                "
              />
              Productivity
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--8
                "
              />
              Business & Career
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--9
                "
              />
              Love & Sex
            </button>
          </li>

          <li className="GoalsCard__category">
            <button className="GoalsCard__category-button">
              <div
                className="
                  GoalsCard__category-icon
                  GoalsCard__category-icon--10
                "
              />
              Sports & Fitness
            </button>
          </li>
        </ul>
      </div>

      <div className="snippets" />
    </div >
  );
};
