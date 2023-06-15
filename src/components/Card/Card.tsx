import { Product } from '../../types/Product';
import './Card.scss';
import favourites from '../../icons/Favourites (Heart Like).svg';
import favouritesFilled from '../../icons/Favourites Filled (Heart Like).svg';
import { useState } from 'react';
import { BasketEdit } from '../../types/BasketEdit';
import { Counter } from '../Counter/Counter';

interface Props {
  product:Product;
  style: React.CSSProperties;
  count: number,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const Card = ({product, style, count, onBasketIdsSet}:Props) => {
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
          className={count? "card__buttons--transparent" : "card__buttons--buy"}
          onClick={() => !count && onBasketIdsSet(product.id, 'add')}
        >
            Buy
          {count && (
            <div className="card__buttons--counter">
              <Counter
                item={product}
                count={count}
                onBasketIdsSet={onBasketIdsSet}
              />
            </div>
          )}
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
