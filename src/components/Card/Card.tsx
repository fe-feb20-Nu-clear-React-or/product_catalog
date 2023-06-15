import { Product } from '../../types/Product';
import './Card.scss';
import placeholder from '../../img/phones/apple-iphone-11/black/01.jpg';
import favourites from '../../icons/Favourites (Heart Like).svg';
import favouritesFilled from '../../icons/Favourites Filled (Heart Like).svg';
import { useState } from 'react';

interface Props {
  product:Product;
  style: React.CSSProperties,
  handleSetBasketIds: (id: string) => void,
}

export const Card:React.FC<Props> = ({product, style, handleSetBasketIds}) => {
  const [faved,setFaved]=useState(false);

  const handleFaving = () => {
    setFaved(prev => !prev);
    // add to faved function
  };
  
  return (
    <section className="card" style={style}>
      <img
        className="card__photo"
        src={require(`../../${product.image}`)}
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
        <a
          className="card__buttons--buy"
          onClick={() => handleSetBasketIds(product.id)}
        >
            Buy
        </a>
        <a
          className="card__buttons--fav"
          onClick={()=>handleFaving()}  
        >
          <img src={faved?favouritesFilled:favourites} alt="Favourites icon" />
        </a>
      </div>
    </section>
  );
};
