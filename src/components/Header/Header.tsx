// eslint-disable-next-line max-len
import { useEffect, useRef } from 'react';
import { Resolution } from '../../types/Resolution';

interface HeaderProps {
  resolution: Resolution,
}

import './Header.scss';

export const Header:React.FC<HeaderProps> = ({resolution}) => {

  const backgroundImageRef = useRef<HTMLDivElement>(null);

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

    window.addEventListener('resize', adjustElementHeights);

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
