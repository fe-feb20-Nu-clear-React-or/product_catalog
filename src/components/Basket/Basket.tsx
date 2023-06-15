import './Basket.scss';
import returnIcon from '../../icons/Chevron (Arrow Left).svg';
import { BasketItem } from '../BasketItem/BasketItem';
import ApiDataContext from '../../ApiDataContext';
import { useContext } from 'react';
import { BasketEdit } from '../../types/BasketEdit';

interface BasketProps {
  totalItem: number,
  basketIds: {[id: string]: number},
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const Basket = ({totalItem, basketIds, onBasketIdsSet}: BasketProps) => {
  const items = useContext(ApiDataContext);
  const ids = Object.keys(basketIds);
  const selectedItems = ids.map(id => items.find(item => item.id === id));

  return (
    <div className='basket'>
      <div className='basket__return'>
        <img src={returnIcon} alt="return arrow icon" />
        <span className='basket__return-text'>Back</span>
      </div>

      <h1 className='basket__title'>Cart</h1>

      <div className='basket__content'>
        <div className='basket__items'>
          {selectedItems.map(item => {
            if (item) {
              return <BasketItem
                key={item.id} item={item} count={basketIds[item.id]}
                onBasketIdsSet={onBasketIdsSet}
              />;
            }

            return;
          })}
        </div>

        <div className='basket__checkout'>
          <h2 className='basket__total'>$2657</h2>
          <h3 className='basket__total-text'>Total for {totalItem} items</h3>
          <button className='basket__button'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
