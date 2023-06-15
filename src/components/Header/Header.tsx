// eslint-disable-next-line max-len
import { Resolution } from '../../types/Resolution';
import headerImageDesktop1 from 
  '../../photos/home-page-header-image-desktop1.png';
import headerImageDesktop2 from 
  '../../photos/home-page-header-image-desktop2.png';
import headerImageDesktop3 from 
  '../../photos/home-page-header-image-desktop3.png';
import headerImageMobile from '../../photos/home-page-header-image-mobile.png';

import React, { useState } from 'react';
import './Header.scss';

interface HeaderProps {
  resolution: Resolution;
}

export const Header: React.FC<HeaderProps> = ({ resolution }) => {
  const slides = [headerImageDesktop1,headerImageDesktop2,headerImageDesktop3];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  

  const handleSlideForward=()=>{
    setCurrentSlideIndex(prev => (prev+1)%slides.length);
  };

  const handleSlideBack=()=>{
    setCurrentSlideIndex(prev => (prev-1+slides.length)%slides.length);
  };

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
              onClick={handleSlideBack}
            >
              {'<'}
            </button>
            <img
              className="header__image"
              src={slides[currentSlideIndex]}
              alt="iphone header image"
            />
            <button
              className="carousel__switch-button
              carousel__switch-button--desktop"
              onClick={handleSlideForward}
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
        <div className={`header__navigation-bar${currentSlideIndex===0?' header__navigation-bar--active':''}`}></div>
        <div className={`header__navigation-bar${currentSlideIndex===1?' header__navigation-bar--active':''}`}></div>
        <div className={`header__navigation-bar${currentSlideIndex===2?' header__navigation-bar--active':''}`}></div>
      </span>
    </section>
  );
};
