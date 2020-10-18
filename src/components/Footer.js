import React from 'react';
import { ReactComponent as LogoTMDb } from '../img/blue_short.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <span>
          "This product uses the TMDb API <br />
          but is not endorsed or certified by TMDb."
        </span>
        <LogoTMDb width="69" title="TMDb logo" alt="TMDb logo" />
      </div>
    </footer>
  );
};
