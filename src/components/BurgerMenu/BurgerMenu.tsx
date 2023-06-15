import { NavLink } from "react-router-dom";
import favourites from "../../icons/Favourites (Heart Like).svg";
import bag from '../../icons/Shopping bag + Counter(Cart).svg';
import bagEmpty from '../../icons/Shopping bag (Cart).svg';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  handleSetIsMenuOpen: (isOpen: boolean) => void,
  totalItem: number,
}

export const BurgerMenu = ({handleSetIsMenuOpen,totalItem}:BurgerMenuProps) => {
  const handleCloseMenu = () => {
    handleSetIsMenuOpen(false);
  };

  return (
    <div className="burgerMenu">
      <nav className="burgerMenu__links">
        <NavLink
          to="/home"
          className="burgerMenu__link"
          onClick={handleCloseMenu}
        >home</NavLink>
        <NavLink
          to="/phones"
          className="burgerMenu__link"
          onClick={handleCloseMenu}
        >phones</NavLink>
        <NavLink
          to="/tablets"
          className="burgerMenu__link"
          onClick={handleCloseMenu}
        >tablets</NavLink>
        <NavLink
          to="/accessories"
          className="burgerMenu__link"
          onClick={handleCloseMenu}
        >accessories</NavLink>
      </nav>

      <div className='burgerMenu__icons'>
        <NavLink
          to="/favourites"
          className='burgerMenu__icon'
          onClick={handleCloseMenu}
        >
          <img src={favourites} alt="Favourites icon" />
        </NavLink>

        <NavLink
          to="/cart"
          className='burgerMenu__icon'
          onClick={handleCloseMenu}
        >
          <img src={totalItem ? bag : bagEmpty} alt="Shopping bag icon" />
          {totalItem && (
            <div className="burgerMenu__icon-counter">
              <span>{totalItem}</span>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};
