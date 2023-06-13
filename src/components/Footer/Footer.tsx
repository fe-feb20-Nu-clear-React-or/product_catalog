import './Footer.scss';
import niceGadgets from '../../icons/NiceGadgets.svg'
import upArrow from '../../icons/Chevron (Arrow Up).svg'
import { NavLink } from 'react-router-dom'

export const Footer = () => (
  <footer className="footer">
    <img className="footer__logo" src={niceGadgets} alt='footer-logo' />

    <ul className='footer__list'>
      <li className='footer__list-item'>
        <a href="#githubLinkHere" className='footer__list-link'>GITHUB</a>
      </li>
      <li className='footer__list-item'>
        <a href="#contactsLinkHere" className='footer__list-link'>CONTACTS</a>
      </li>
      <li className='footer__list-item'>
        <a href="#rightsLinkHere" className='footer__list-link'>RIGTHS</a>
      </li>
    </ul>

    <div className='footer__back-to-top'>
      <span className='footer__back-to-top back-to-top__text'>Back to top</span>

      <NavLink 
        to="/home"
      >
        <div
        className='footer__back-to-top back-to-top__button'
        onClick={() => document.documentElement.scrollTop = 0}
        >
          <img src={upArrow} alt="back-to-top"/> 
        </div>
      </NavLink>
    </div>
  </footer>
);
