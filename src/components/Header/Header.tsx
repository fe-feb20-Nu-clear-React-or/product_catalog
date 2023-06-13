import headerImageMobile from '../../photos/home-page-header-image-mobile.png';
import headerImageDesktop from '../../photos/home-page-header-image-desktop.png';

import './Header.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [headerImageSrc, setHeaderImageSource] = useState('');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 640) {
          setHeaderImageSource(headerImageDesktop);
        } else {
            setHeaderImageSource(headerImageMobile)
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
            <img 
                className="header__image"
                alt="Iphone 14 Pro" 
                src={headerImageSrc}
            />
            <span className="header__navigation">
                <div className="header__navigation-bar header__navigation-bar--active"></div>
                <div className="header__navigation-bar"></div>
                <div className="header__navigation-bar"></div>
            </span>
        </section>
    )
}