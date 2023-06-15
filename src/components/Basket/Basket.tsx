import './Basket.scss';
import returnIcon from '../../icons/Chevron (Arrow Left).svg';
import { BasketItem } from '../BasketItem/BasketItem';
import ApiDataContext from '../../ApiDataContext';
import { useContext } from 'react';

export const Basket = () => {
  const items = useContext(ApiDataContext);
  const selectedItems = items.filter(item => +item.id < 30 && +item.id > 25);

  return (
    <div className='basket'>
      <div className='basket__return'>
        <img src={returnIcon} alt="return arrow icon" />
        <span className='basket__return-text'>Back</span>
      </div>

      <h1 className='basket__title'>Cart</h1>

      <div className='basket__content'>
        <div className='basket__items'>
          {selectedItems.map(item => <BasketItem key={item.id} item={item} />)}
        </div>

        <div className='basket__checkout'>
          <h2 className='basket__total'>$2657</h2>
          <h3 className='basket__total-text'>Total for 3 items</h3>
          <button className='basket__button'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
