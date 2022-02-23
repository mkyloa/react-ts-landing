import React from 'react';
import './Header.scss';

export const Header: React.FC = () => (
  <nav className="Header">
    <a 
      href="" 
      className="Header__link"
      onClick={(event) => event.preventDefault()}
    />
    <div className="Header__button-container">
      <a 
        href=""
        className="Header__button Header__button--account"
        onClick={(event) => event.preventDefault()}
      />

      <a 
        href=""
        className="Header__button Header__button--menu"
        onClick={(event) => event.preventDefault()}
      />
    </div>
  </nav>
);
