import {NavLink} from 'react-router-dom'
import favourites from "../icons/Favourites (Heart Like).svg"
import bag from "../icons/Shopping bag (Cart).svg"
import hamburgerMenu from "../icons/HamburgerMenu.svg"
import logo from "../icons/logo.svg"
import logoIcon from "../icons/logo-icon.svg"
import { useEffect, useState } from 'react'

export const Navbar = () => {
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
    return (
        <nav className='navbar'>
            {windowSize >= 640
            ? (
                <>
                    <div className='navbar__links'>
                        <div className='navbar__logo'>
                            <img className='navbar__logo-text' src={logo} alt="logo icon" />
                            <img className='navbar__logo-icon' src={logoIcon} alt="logo ok emoji" />
                        </div>
                        <NavLink to="/home" className="navbar__link">home</NavLink>
                        <NavLink to="/phones" className="navbar__link">phones</NavLink>
                        <NavLink to="/tablets" className="navbar__link">tablets</NavLink>
                        <NavLink to="/accessories" className="navbar__link">accessories</NavLink>
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
                    <div className='navbar__icon'>
                        <img src={hamburgerMenu} alt="Hamburger Menu icon" />
                    </div>
                </>
            )}
            
        </nav>
    )
}