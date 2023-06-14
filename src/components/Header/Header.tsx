<<<<<<< HEAD
// eslint-disable-next-line max-len
import { useEffect, useRef } from 'react';
import { Resolution } from '../../types/Resolution';

interface HeaderProps {
  resolution: Resolution,
}
=======
import { useEffect, useState } from 'react';
import headerImageMobile from '../../photos/home-page-header-image-mobile.png';
// eslint-disable-next-line max-len
import headerImageDesktop from '../../photos/home-page-header-image-desktop.png';
>>>>>>> 96e1ccab0ed4b05322450edf9d4fe7d3333e6e82

import './Header.scss';

export const Header:React.FC<HeaderProps> = ({resolution}) => {

<<<<<<< HEAD
  const backgroundImageRef = useRef<HTMLDivElement>(null);

=======
>>>>>>> 96e1ccab0ed4b05322450edf9d4fe7d3333e6e82
  useEffect(() => {
    const adjustElementHeights = () => {
      const backgroundImageContainer = backgroundImageRef.current;
      const buttonContainer = backgroundImageContainer?.parentElement;

      if (buttonContainer && backgroundImageContainer) {
        const computedStyles = getComputedStyle(backgroundImageContainer);
        const containerHeight = parseFloat(computedStyles.height);

        buttonContainer.style.height = `${containerHeight}px`;
      }
    };

    adjustElementHeights();

<<<<<<< HEAD
    window.addEventListener('resize', adjustElementHeights);
=======

    window.addEventListener('resize', handleResize);
>>>>>>> 96e1ccab0ed4b05322450edf9d4fe7d3333e6e82

    return () => {
      window.removeEventListener('resize', adjustElementHeights);
    };
  }, []);

  return (
    <section className="header">
      <h1 className="header__title">Welcome to Nice<br></br> Gadgets store!</h1>
      <div className="header__image-wrapper">
        {[Resolution.TABLET, Resolution.DESKTOP].includes(resolution) ? (
          <><button
            className="carousel__switch-button
            carousel__switch-button--desktop"
          >
            {'<'}
          </button>
          <div
            className="header__image-container"
            ref={backgroundImageRef}
          >
          </div>
          <button
            className="carousel__switch-button
        carousel__switch-button--desktop"
          >
            {'>'}
          </button></>

        ) : (
          <div
            className="header__image-container"
            ref={backgroundImageRef}
          >
          </div>
        )}
      </div>
      <span className="header__navigation">
        <div className="header__navigation-bar
        header__navigation-bar--active"></div>
        <div className="header__navigation-bar"></div>
        <div className="header__navigation-bar"></div>
      </span>
    </section>
  );
};
