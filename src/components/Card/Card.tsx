import { Product } from '../../types/Product';
import './Card.scss';
import { Page } from '../../types/Page';
import { BasketEdit } from '../../types/BasketEdit';
import FavoriteIcon from '../../icons/Favourites Filled (Heart Like).svg';
import SelectedFavoriteIcon from '../../icons/Favourites (Heart Like).svg';
import { Counter } from '../Counter/Counter';
import { useState } from 'react';
import classNames from 'classnames';

interface CardProps {
  product: Product,
  style: React.CSSProperties,
  count: number,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  onFavsIdsSet: (id: string) => void,
  favIds: string[],
  currentPage: Page,
}

export const Card: React.FC<CardProps> = ({
  product,
  style,
  count,
  onBasketIdsSet,
  currentPage,
  favIds,
  onFavsIdsSet,
}) => {
  const [noHover, setNoHover] = useState(false);
  const isFav = favIds.includes(product.id);

  const favIconClassName = classNames({
    'card__buttons-fav': true,
    'card__buttons-fav--empty': !isFav,
    'card__buttons-fav--noHover': noHover,
  });

  const cardClassName = currentPage === Page.HOME
    ? 'card'
    : 'card card--phones-page';

  return (
    <section className={cardClassName} style={style}>
      <img
        className="card__photo"
        src={require(`../../${product.image}`)}
        alt={product.name}
      />
      <h1 className="card__name">{product.name}</h1>
      <div className="card__price">${product.price}</div>

      <div className='card__divider' />

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
          className={count ? "card__buttons-transparent" : "card__buttons-buy"}
          onClick={() => !count && onBasketIdsSet(product.id, BasketEdit.ADD)}
        >
          {currentPage === Page.HOME ? 'Buy' : 'Add to cart'}
          {count && (
            <div className="card__buttons-counter">
              <Counter
                item={product}
                count={count}
                onBasketIdsSet={onBasketIdsSet}
              />
            </div>
          )}
        </a>

        <a
          className={favIconClassName}
          onMouseLeave={() => setNoHover(false)}
          onClick={() => {
            onFavsIdsSet(product.id);
            setNoHover(true);
          }}
        >
          <img
            src={isFav
              ? FavoriteIcon
              : SelectedFavoriteIcon}
            alt="Favourites icon"
          />
        </a>
      </div>
    </section>
  );
};
