import React from "react";
import { NavLink } from "react-router-dom";
import favourites from "../../icons/Favourites (Heart Like).svg"
import bag from "../../icons/Shopping bag (Cart).svg"
import './BurgerMenu.scss';

interface BurgerMenuProps {
    handleSetIsMenuOpen: (isOpen: boolean) => void,
}

export const BurgerMenu = ({handleSetIsMenuOpen}: BurgerMenuProps) => {
    const handleOpenLink = () => {
        handleSetIsMenuOpen(false);
    }
    return (
    <div className="burgerMenu">
        <nav className="burgerMenu__links">
            <NavLink to="/home" className="burgerMenu__link" onClick={handleOpenLink}>home</NavLink>
            <NavLink to="/phones" className="burgerMenu__link" onClick={handleOpenLink}>phones</NavLink>
            <NavLink to="/tablets" className="burgerMenu__link" onClick={handleOpenLink}>tablets</NavLink>
            <NavLink to="/accessories" className="burgerMenu__link" onClick={handleOpenLink}>accessories</NavLink>
        </nav>

        <div className='burgerMenu__icons'>
            <div className='burgerMenu__icon'>
                <img src={favourites} alt="Favourites icon" />
            </div>

            <div className='burgerMenu__icon'>
                <img src={bag} alt="Shopping bag icon" />
            </div>
        </div>
    </div>
  );
}
