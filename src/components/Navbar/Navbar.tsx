import { NavLink } from 'react-router-dom';
import favourites from '../../icons/Favourites (Heart Like).svg';
import bag from '../../icons/Shopping bag (Cart).svg';
import hamburgerMenu from '../../icons/HamburgerMenu.svg';
import close from '../../icons/Close.svg';
import logo from '../../icons/logo.svg';
import logoIcon from '../../icons/logo-icon.svg';
import './Navbar.scss';
import { Resolution } from '../../types/Resolution';

interface NavbarProps {
  isMenuOpen: boolean,
  handleSetIsMenuOpen: (isOpen: boolean) => void,
  resolution: Resolution,
}


export const Navbar = ({ isMenuOpen,
  handleSetIsMenuOpen, resolution }: NavbarProps) => {

  return (
    <nav className={isMenuOpen ? 'navbar navbar--menuOpen' : 'navbar'}>

      {[Resolution.DESKTOP, Resolution.TABLET]
        .includes(resolution) && !isMenuOpen
        ? (
          <>
            <div className="navbar__links">
              <div className="navbar__logo">
                <img className="navbar__logo-text" src={logo} alt="logo icon" />
                <img
                  className="navbar__logo-icon"
                  src={logoIcon}
                  alt="logo ok emoji"
                />
              </div>
              <NavLink to="/home" className="navbar__link">
                home
              </NavLink>
              <NavLink to="/phones" className="navbar__link">
                phones
              </NavLink>
              <NavLink to="/tablets" className="navbar__link">
                tablets
              </NavLink>
              <NavLink to="/accessories" className="navbar__link">
                accessories
              </NavLink>
            </div>

            <div className="navbar__icons">
              <NavLink to="/favourites" className="navbar__icon">
                <img src={favourites} alt="Favourites icon" />
              </NavLink>
              <NavLink to="/cart" className="navbar__icon">
                <img src={bag} alt="Shopping bag icon" />
              </NavLink>
            </div>
          </>
        )
        : (
          <>
            <div className="navbar__logo">
              <img className="navbar__logo-text" src={logo} alt="logo icon" />
              <img
                className="navbar__logo-icon"
                src={logoIcon}
                alt="logo ok emoji"
              />
            </div>
            {isMenuOpen
              ? (
                <div
                  className="navbar__icon"
                  onClick={() => handleSetIsMenuOpen(false)}
                >
                  <img src={close} alt="close hamburger menu icon" />
                </div>
              )
              : (
                <div
                  className="navbar__icon"
                  onClick={() => handleSetIsMenuOpen(true)}
                >
                  <img src={hamburgerMenu} alt="hamburger menu icon" />
                </div>
              )}
          </>
        )}
    </nav>
  );
};
