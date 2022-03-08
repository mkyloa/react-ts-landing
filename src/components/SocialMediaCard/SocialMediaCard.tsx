import React from 'react';
import './SocialMediaCard.scss';

export const SocialMediaCard: React.FC = () => (
  <div className="SocialMediaCard card">
    <div className="SocialMediaCard__logo"></div>

    <h2 className="SocialMediaCard__title title">
      Empower yourself with the best books insights
    </h2>

    <span className="SocialMediaCard__contacts">
      Social media:
    </span>

    <div className="SocialMediaCard__link-container">
      <a
        href="https://facebook.com/headwaybooks/"
        target="_blank"
        rel="noreferrer"
        className="SocialMediaCard__link SocialMediaCard__link--facebook"
      />

      <a
        href="https://www.instagram.com/headway_app/"
        target="_blank"
        rel="noreferrer"
        className="SocialMediaCard__link SocialMediaCard__link--instagram"
      />

      <a
        href="https://twitter.com/get_headway"
        target="_blank"
        rel="noreferrer"
        className="SocialMediaCard__link SocialMediaCard__link--twitter"
      />
    </div>
  </div>
);
