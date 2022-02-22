import React from 'react';
import './SummaryCard.scss';

export const SummaryCard: React.FC = () => (
  <div className="SummaryCard card">
    <h2 className="SummaryCard__title title">
      Summary is the new black
    </h2>

    <p className="SummaryCard__text text">
      Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.
    </p>

    <div className="SummaryCard__image SummaryCard__image--book"></div>

    <p className="SummaryCard__text text">
      Typical book
    </p>

    <p className="SummaryCard__subtext text">
      320 pages ~ 20 hours
    </p>

    <p className="SummaryCard__text SummaryCard__text--key-ideas text">
      {'Key ideas & insights'}
    </p>

    <div className="SummaryCard__image SummaryCard__image--iphone"></div>

    <p className="SummaryCard__text text">
      Summary
    </p>

    <p className="SummaryCard__subtext text">
      ~ 15 minutes
    </p>
  </div>
);