import React from 'react';
import './Header.scss';

export const Header: React.FC = () => (
  <nav className="Header">
    <a href="" className="Header__link"></a>
    <div className="Header__button-container">
      <a href="" className="Header__button Header__button--account"></a>
      <a href="" className="Header__button Header__button--menu"></a>
    </div>
  </nav>
);