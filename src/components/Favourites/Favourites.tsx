import { useContext } from 'react';
import { BasketEdit } from '../../types/BasketEdit';
import './Favourites.scss';
import ApiDataContext from '../../ApiDataContext';
import { Card } from '../Card/Card';
import { Page } from '../../types/Page';
import { Resolution } from '../../types/Resolution';
import returnIcon from '../../icons/Chevron (Arrow Left).svg';

interface FavoritesProps {
  resolution: Resolution,
  basketIds: {[id: string]: number},
  favIds: string[],
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  onFavsIdsSet: (id: string) => void,
}

export const Favourites = ({
  basketIds, favIds, onBasketIdsSet, onFavsIdsSet
}: FavoritesProps) => {
  const items = useContext(ApiDataContext);
  const favItems = favIds
    .map(id => items.find(item => item.id === id)).reverse();

  console.log('fav2', favIds);

  return (
    <div className="favourites">
      <div className='favourites__return'>
        <img src={returnIcon} alt="return arrow icon" />
        <span className='favourites__return-text'>Back</span>
      </div>

      <h1 className='favourites__title'>Favourites</h1>

      <ul className="favourites__list">
        {favItems.map(item => {
          if (item) {
            return (
              <li key={item.id} className="phones__list-item">
                <Card
                  product={item}
                  onBasketIdsSet={onBasketIdsSet}
                  onFavsIdsSet={onFavsIdsSet}
                  count={basketIds[item.id]}
                  style={{ opacity: 1 }}
                  currentPage={Page.PHONES}
                  favIds={favIds}
                />;
              </li>
            );
          }

          return;
        })}
      </ul>
    </div>
  );
};
