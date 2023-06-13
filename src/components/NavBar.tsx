import {NavLink} from 'react-router-dom'
import favourites from "../icons/Favourites (Heart Like).svg"
import bag from "../icons/Shopping bag (Cart).svg"
import hamburgerMenu from "../icons/HamburgerMenu.svg"
import niceGadgets from "../icons/NiceGadgets.svg"
import { useEffect, useState } from 'react'

export const NavBar = () => {
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
            <div className='navbar__icon navbar__icon--logo'>
                <img src={niceGadgets} alt="logo icon" />
            </div>
            {windowSize >= 640
            ? (
                <>
                    <NavLink to="/home" className="navbar__link">home</NavLink>
                    <NavLink to="/phones" className="navbar__link">phones</NavLink>
                    <NavLink to="/tablets" className="navbar__link">tablets</NavLink>
                    <NavLink to="/accessories" className="navbar__link">accessories</NavLink>
                    <div className='navbar__icon'>
                        <img src={favourites} alt="Favourites icon" />
                    </div>
                    <div className='navbar__icon'>
                        <img src={bag} alt="Shopping bag icon" />
                    </div>
                    
                </>
            )
            : (
                <div className='navbar__icon'>
                    <img src={hamburgerMenu} alt="Hamburger Menu icon" />
                </div>
            )}
            
        </nav>
    )
}