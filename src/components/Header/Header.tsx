import headerImage from '../../photos/home-page-header-image.png';
import './Header.scss';

export const Header = () => {
    return (
        <section className="header">
            <h1 className="header__title">Welcome to Nice<br></br> Gadgets store!</h1>
            <img 
                className="header__image"
                alt="Iphone 14 Pro" 
                src={headerImage}
            />
            <span className="header__navigation">
                <div className="header__navigation-bar header__navigation-bar--active"></div>
                <div className="header__navigation-bar"></div>
                <div className="header__navigation-bar"></div>
            </span>
        </section>
    )
}