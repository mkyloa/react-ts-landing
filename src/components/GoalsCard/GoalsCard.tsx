import React from 'react';
import './GoalsCard.scss';

// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';


export const GoalsCard: React.FC = () => {
  // const gc = document.querySelector('.GoalsCard');
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

      <div className="snippets"></div>

      {/* <ScrollContainer scrollParent={gc}>
        <ScrollPage page={2} debugBorder={false}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            </span>
            
            <span style={{ fontSize: '40px' }}>
              <Animator animation={batch(Sticky(), MoveIn(1000, 0))}>Nice to meet you 🙋🏻‍♀️</Animator>
            </span>

            <span style={{ fontSize: '40px' }}>
              <Animator animation={batch(Sticky(), MoveOut(1000, 0))}>Good bye ✋🏻</Animator>
            </span>

            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={3} debugBorder={false}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            </span>
            
            <span style={{ fontSize: '40px' }}>
              <Animator animation={batch(Sticky(), MoveIn(1000, 0))}>Nice to meet you 🙋🏻‍♀️</Animator>
            </span>

            <span style={{ fontSize: '40px' }}>
              <Animator animation={batch(Sticky(), MoveOut(1000, 0))}>Good bye ✋🏻</Animator>
            </span>

            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer> */}
    </div >
  );
};
