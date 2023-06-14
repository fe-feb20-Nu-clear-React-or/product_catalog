import headerImageMobile from '../../photos/home-page-header-image-mobile.png';
import headerImageDesktop from '../../photos/home-page-header-image-desktop.png';
import React from 'react';

import './Header.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [headerImageSrc, setHeaderImageSource] = useState('');
    const [isDesktopResolution, setIsDesktopResolution] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 640) {
          setHeaderImageSource(headerImageDesktop);
          setIsDesktopResolution(true);
        } else {
            setHeaderImageSource(headerImageMobile)
            setIsDesktopResolution(false);
        }
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
        <section className="header">
            <h1 className="header__title">Welcome to Nice<br></br> Gadgets store!</h1>
            {isDesktopResolution ? (
                <div className="header__image-desktop-container">
                  <button className="carousel__switch-button carousel__switch-button--desktop">
                    {'<'}
                  </button>
                  <img
                    className="header__image header__image--desktop"
                    alt="Iphone 14 Pro"
                    src={headerImageSrc}
                  />
                  <button className="carousel__switch-button carousel__switch-button--desktop">
                    {'>'}
                  </button>
                </div>
              ) : (
                <img
                  className="header__image"
                  alt="Iphone 14 Pro"
                  src={headerImageSrc}
                />
              )}
            <span className="header__navigation">
                <div className="header__navigation-bar header__navigation-bar--active"></div>
                <div className="header__navigation-bar"></div>
                <div className="header__navigation-bar"></div>
            </span>
        </section>
    )
}
