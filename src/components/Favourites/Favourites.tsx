import { useContext } from 'react';
import { BasketEdit } from '../../types/BasketEdit';
import './Favourites.scss';
import ApiDataContext from '../../ApiDataContext';
import { Card } from '../Card/Card';
import { Page } from '../../types/Page';
import { Resolution } from '../../types/Resolution';
// import returnIcon from '../../icons/Chevron (Arrow Left).svg';
import { NavLink } from 'react-router-dom';

interface FavoritesProps {
  resolution: Resolution,
  basketIds: {[id: string]: number},
  favIds: string[],
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  onFavsIdsSet: (id: string) => void,
}

export const Favourites: React.FC<FavoritesProps> = ({
  basketIds,
  favIds,
  onBasketIdsSet,
  onFavsIdsSet,
}) => {
  const items = useContext(ApiDataContext);
  const favItems = favIds
    .map(id => items.find(item => item.id === id)).reverse();

  console.log('fav2', favIds);

  return (
    <div className="favourites">
      <div className="favourites__wrapper">
        <article className="favourites__header">
          <div className="favourites__header-path">
            <NavLink
              to="/home"
              className="favourites__header-path-home-icon"
            />
            <p className="favourites__header-path-page-name">
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&nbsp;Favourites
            </p>
          </div>

          <h1 className="favourites__header-title">Favourites</h1>
          <p className="favourites__header-model-amount">
            {`${favItems.length} items`}
          </p>
        </article>

        <ul className="favourites__list">
          {favItems.map(item => {
            if (item) {
              return (
                <li key={item.id}>
                  <Card
                    product={item}
                    onBasketIdsSet={onBasketIdsSet}
                    onFavsIdsSet={onFavsIdsSet}
                    count={basketIds[item.id]}
                    style={{ opacity: 1 }}
                    currentPage={Page.PHONES}
                    favIds={favIds}
                  />
                </li>
              );
            }

            return;
          })}
        </ul>
      </div>
    </div>
  );
};
