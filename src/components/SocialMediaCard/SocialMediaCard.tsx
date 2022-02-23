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
        href=""
        className="SocialMediaCard__link SocialMediaCard__link--facebook"
        onClick={(event) => event.preventDefault()}
      />

      <a
        href=""
        className="SocialMediaCard__link SocialMediaCard__link--instagram"
        onClick={(event) => event.preventDefault()}

      />

      <a
        href=""
        className="SocialMediaCard__link SocialMediaCard__link--twitter"
        onClick={(event) => event.preventDefault()}

      />
    </div>
  </div>
);
