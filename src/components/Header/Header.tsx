import { useEffect, useState } from 'react';
import headerImageMobile from '../../photos/home-page-header-image-mobile.png';
// eslint-disable-next-line max-len
import headerImageDesktop from '../../photos/home-page-header-image-desktop.png';
import './Header.scss';

export const Header = () => {
  const [headerImageSrc, setHeaderImageSource] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setHeaderImageSource(headerImageDesktop);
      } else {
        setHeaderImageSource(headerImageMobile);
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
      <h1 className="header__title">
        Welcome to Nice
        <br />
        {' '}
        Gadgets store!
      </h1>
      <img
        className="header__image"
        alt="Iphone 14 Pro"
        src={headerImageSrc}
      />
      <span className="header__navigation">
        <div
          className="header__navigation-bar header__navigation-bar--active"
        />
        <div className="header__navigation-bar" />
        <div className="header__navigation-bar" />
      </span>
    </section>
  );
};
