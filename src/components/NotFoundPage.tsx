import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <>
    <h1 className="notFound-title">Page not found</h1>
    <Link to="/home" className="notFound-return">Return to Home</Link>
  </>
);
