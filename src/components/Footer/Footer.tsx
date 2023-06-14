/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import niceGadgets from '../../icons/NiceGadgets.svg';
import upArrow from '../../icons/Chevron (Arrow Up).svg';

export const Footer = () => (
  <footer className="footer">
    <img className="footer__logo" src={niceGadgets} alt="footer-logo" />

    <ul className="footer__list">
      <li className="footer__list-item">
        <a href="#githubLinkHere" className="footer__list-link">GITHUB</a>
      </li>
      <li className="footer__list-item">
        <a href="#contactsLinkHere" className="footer__list-link">CONTACTS</a>
      </li>
      <li className="footer__list-item">
        <a href="#rightsLinkHere" className="footer__list-link">RIGTHS</a>
      </li>
    </ul>

    <div className='footer__back-to-top'>
      <p className='footer__back-to-top-text'>Back to top</p>
      <NavLink
        to="/home"
        className='footer__back-to-top-link'
        onClick={() => document.documentElement.scrollTop = 0}
      >
          <img
            src={upArrow}
            alt="back-to-top"
            className="footer__back-to-top-image"
          />
      </NavLink>
    </div>
  </footer>
);
