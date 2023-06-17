import { Product } from '../../types/Product';
import './Card.scss';
import { Page } from '../../types/Page';
import { BasketEdit } from '../../types/BasketEdit';
import FavoriteIcon from '../../icons/Favourites Filled (Heart Like).svg';
import SelectedFavoriteIcon from '../../icons/Favourites (Heart Like).svg';
import { Counter } from '../Counter/Counter';
import { useState } from 'react';
import classNames from 'classnames';
import bagEmpty from '../../icons/Shopping bag (Cart).svg';
import { NavLink } from 'react-router-dom';

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

  const { image, name, price, screen, capacity, ram, id } = product;

  return (
    <section className={cardClassName} style={style}>
      <img
        className="card__photo"
        src={require(`../../images/${image}`)}
        alt={name}
      />
      <h1 className="card__name">{name}</h1>
      <div className="card__price">${price}</div>

      <div className='card__divider' />

      <div className="card__info">
        <div className="card__info--details">Screen:</div>
        <div className="card__info--value">{screen}</div>
      </div>

      <div className="card__info">
        <div className="card__info--details">Capacity:</div>
        <div className="card__info--value">{capacity}</div>
      </div>

      <div className="card__info">
        <div className="card__info--details">RAM:</div>
        <div className="card__info--value">{ram}</div>
      </div>

      <div className='card__buttons'>
        {!count
          ? (
            <a
              className="card__buttons-buy"
              onClick={() => onBasketIdsSet(id, BasketEdit.ADD)}
            >
              {currentPage === Page.HOME ? 'Buy' : 'Add to cart'}
            </a>
          )
          : (
            <>
              <NavLink
                to="/cart"
                className="card__buttons-basket"
                onClick={() => document.documentElement.scrollTop = 0}
              >
                <img
                  src={bagEmpty}
                  alt="Baskiet icon"
                />
              </NavLink>

              <div className="card__buttons-counter">
                <Counter
                  item={product}
                  count={count}
                  onBasketIdsSet={onBasketIdsSet}
                />
              </div>
            </>
          )}

        <a
          className={favIconClassName}
          onMouseLeave={() => setNoHover(false)}
          onClick={() => {
            onFavsIdsSet(id);
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
