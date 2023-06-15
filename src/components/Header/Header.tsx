// eslint-disable-next-line max-len
import { Resolution } from '../../types/Resolution';
import headerImageDesktop from
  '../../photos/home-page-header-image-desktop.png';
import headerImageMobile from '../../photos/home-page-header-image-mobile.png';

import React from 'react';
import './Header.scss';

interface HeaderProps {
  resolution: Resolution;
}

export const Header: React.FC<HeaderProps> = ({ resolution }) => {

  return (
    <section className="header">
      <h1 className="header__title">
        Welcome to Nice
        {resolution !== Resolution.DESKTOP
          ? <br /> : <>&nbsp;</>} Gadgets store!
      </h1>
      <div className="header__image-wrapper">
        {[Resolution.TABLET, Resolution.DESKTOP].includes(resolution) ? (
          <>
            <button
              className="carousel__switch-button
              carousel__switch-button--desktop"
            >
              {'<'}
            </button>
            <img
              className="header__image"
              src={headerImageDesktop}
              alt="iphone header image"
            />
            <button
              className="carousel__switch-button
              carousel__switch-button--desktop"
            >
              {'>'}
            </button>
          </>
        ) : (
          <img
            className="header__image"
            src={headerImageMobile}
            alt="iphone header image"
          />
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
