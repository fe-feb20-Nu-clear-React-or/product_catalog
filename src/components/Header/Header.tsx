// eslint-disable-next-line max-len
import { Resolution } from '../../types/Resolution';

interface HeaderProps {
  resolution: Resolution,
}

import './Header.scss';

export const Header:React.FC<HeaderProps> = ({resolution}) => {
  return (
    <section className="header">
      <h1 className="header__title">Welcome to Nice<br></br> Gadgets store!</h1>
      <div className="header__image-wrapper">
        {[Resolution.TABLET, Resolution.DESKTOP].includes(resolution) ? (
          <><button
            className="carousel__switch-button
            carousel__switch-button--desktop"
          >
            {'<'}
          </button>
          <div
            className="header__image-container"
          >
          </div>
          <button
            className="carousel__switch-button
        carousel__switch-button--desktop"
          >
            {'>'}
          </button></>

        ) : (
          <div
            className="header__image-container"
          >
          </div>
        )}
      </div>
      <span className="header__navigation">
        <div className="header__navigation-bar
        header__navigation-bar--active"></div>
        <div className="header__navigation-bar"></div>
        <div className="header__navigation-bar"></div>
      </span>
    </section>
  );
};
