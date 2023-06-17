import { Product } from '../../types/Product';
import './Card.scss';
import { Page } from '../../types/Page';
import { BasketEdit } from '../../types/BasketEdit';
import FavoriteIcon from '../../icons/Favourites Filled (Heart Like).svg';
import SelectedFavoriteIcon from '../../icons/Favourites (Heart Like).svg';
import { Counter } from '../Counter/Counter';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import bagEmpty from '../../icons/Shopping bag (Cart).svg';
import { NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

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

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // github doesnt tolerate require() thats why this weird logic is needed
    const loadImage = async () => {
      try {
        const imageModule = await import(`../../${product.image}`);

        setImageSrc(imageModule.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [product.image]);


  return (
    <section className={cardClassName} style={style}>
      {
        imageSrc
          ?    <img
            className="card__photo"
            src={imageSrc}
            alt={imageSrc ? product.name : ''}
          />
          : <Loader />
      }
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
        {!count
          ? (
            <a
              className="card__buttons-buy"
              onClick={() => onBasketIdsSet(product.id, BasketEdit.ADD)}
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
