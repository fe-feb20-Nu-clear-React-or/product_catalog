import './Footer.scss';
import niceGadgets from '../../icons/NiceGadgets.svg'
import upArrow from '../../icons/Chevron (Arrow Up).svg'

export const Footer = () => (
  <footer className="footer">
    <img className="footer__logo" src={niceGadgets} alt='footer-logo' />

    <ul className='footer__footer-list footer-list'>
      <li>
        <a href="#githubLinkHere" className='footer-list__button'>GITHUB</a>
      </li>
      <li>
        <a href="#contactsLinkHere" className='footer-list__button'>CONTACTS</a>
      </li>
      <li>
        <a href="#rightsLinkHere" className='footer-list__button'>RIGTHS</a>
      </li>
    </ul>

    <div className='footer__back-to-top'>
      <span className='footer__back-to-top back-to-top__text'>Back to top</span>
      <div
        className='footer__back-to-top back-to-top__button'
        onClick={() => document.documentElement.scrollTop = 0}
      >
          <img src={upArrow} alt="back-to-top"/>
      </div>
    </div>
  </footer>
);