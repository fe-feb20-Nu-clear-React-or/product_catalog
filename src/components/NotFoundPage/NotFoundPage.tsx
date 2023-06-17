import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <>
    <h1 className='not-found__title'>Page not found</h1>

    <Link to="/home" className="not-found__return">Return to&nbsp;
      <span className='not-found__link'>Home</span>
    </Link>
  </>
);
