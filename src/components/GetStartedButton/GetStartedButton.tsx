import React from 'react';
import './GetStartedButton.scss';

export const GetStartedButton: React.FC = () => (
  <div className="GetStartedButton__container">
    <a
      href="#"
      className="GetStartedButton"
      onClick={(event) => event.preventDefault()}
    >
      <span>Get Started</span>
    </a>
  </div>
);
