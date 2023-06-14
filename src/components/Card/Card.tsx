import { Product } from '../../types/Product';
import './Card.scss';
import placeholder from '../../img/phones/apple-iphone-11/black/01.jpg';

interface Props {
  product:Product;
}

export const Card:React.FC<Props> = ({product}) => {
  return (
    <section className="card">
      <img 
        className="card__photo"
        src={placeholder}
        alt={product.name}
      ></img>
      <h1 className="card__name">{product.name}</h1>
      <div className="card__price">${product.price}</div>
      
      <div className='card__divider'></div>
     
      <div className="card__info">
        <div className="card__info--details">Screen:</div>
        <div className="card__info--value">{product.screen}</div>
      </div>

      <div className="card__info">
        <div className="card__info--details">Capacity:</div>
        <div className="card__info--value">{product.capacity}</div>
      </div>
        
      <div className="card__info">
        <div className="card__info--details">RAM:</div>
        <div className="card__info--value">{product.ram}</div>
      </div>
  
      <div className='card__buttons'>
        <a className="card__buttons--buy">Buy</a>
        <a className="card__buttons--fav">3</a>
      </div>
      
  
    </section>
  );
};
