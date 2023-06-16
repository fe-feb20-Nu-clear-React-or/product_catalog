import { Link } from 'react-router-dom';
import './Tablets.scss';

export const Tablets = () => (
  <>
    <h1 className='tablets__title'>Tablets (soon)</h1>

    <Link to="/home" className="tablets__return">Return to&nbsp;
      <span className='tablets__link'>Home</span>
    </Link>
  </>
);
