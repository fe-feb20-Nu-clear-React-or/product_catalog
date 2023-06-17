import { Link } from 'react-router-dom';
import './Accessories.scss';

export const Accessories = () => (
  <>
    <h1 className="accessories__title">Accessories (soon)</h1>
    <Link to="/home" className="accessories__return">Return to&nbsp;
      <span className="accessories__link">Home</span>
    </Link>
  </>
);
