import {NavLink} from 'react-router-dom'
import favourites from "../../icons/Favourites (Heart Like).svg"
import bag from "../../icons/Shopping bag (Cart).svg"
import hamburgerMenu from "../../icons/HamburgerMenu.svg"
import close from "../../icons/Close.svg"
import logo from "../../icons/logo.svg"
import logoIcon from "../../icons/logo-icon.svg"
import { useEffect, useState } from 'react'
import './Navbar.scss';

interface NavbarProps {
    isMenuOpen: boolean,
    handleSetIsMenuOpen: (isOpen: boolean) => void,
}

export const Navbar = ({isMenuOpen, handleSetIsMenuOpen}: NavbarProps) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      const closeMenu = () => {
        handleSetIsMenuOpen(false);
      }
    return (
        <nav className={isMenuOpen ? 'navbar navbar--menuOpen' : 'navbar'}>

            {windowSize >= 640 && !isMenuOpen
            ? (
                <>
                    <div className='navbar__links'>
                        <div className='navbar__logo'>
                            <img className='navbar__logo-text' src={logo} alt="logo icon" />
                            <img className='navbar__logo-icon' src={logoIcon} alt="logo ok emoji" />
                        </div>
                        <NavLink to="/home" className="navbar__link" onClick={closeMenu}>home</NavLink>
                        <NavLink to="/phones" className="navbar__link" onClick={closeMenu}>phones</NavLink>
                        <NavLink to="/tablets" className="navbar__link" onClick={closeMenu}>tablets</NavLink>
                        <NavLink to="/accessories" className="navbar__link" onClick={closeMenu}>accessories</NavLink>
                    </div>

                    <div className='navbar__icons'>
                        <div className='navbar__icon'>
                            <img src={favourites} alt="Favourites icon" />
                        </div>
                        <div className='navbar__icon'>
                            <img src={bag} alt="Shopping bag icon" />
                        </div>
                    </div>
                </>
            )
            : (
                <>
                    <div className='navbar__logo'>
                        <img className='navbar__logo-text' src={logo} alt="logo icon" />
                        <img className='navbar__logo-icon' src={logoIcon} alt="logo ok emoji" />
                    </div>
                    {isMenuOpen
                        ? (
                            <div className='navbar__icon' onClick={closeMenu}>
                                <img src={close} alt="close hamburger menu icon" />
                            </div>
                        )
                        : (
                            <div className='navbar__icon' onClick={() => handleSetIsMenuOpen(true)}>
                                <img src={hamburgerMenu} alt="hamburger menu icon" />
                            </div>
                        )}
                </>
            )}

        </nav>
    )
}
