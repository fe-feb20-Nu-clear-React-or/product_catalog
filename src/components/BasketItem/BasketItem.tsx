import { Product } from '../../types/Product';
import './BasketItem.scss';
import plus from '../../icons/Plus.svg';
import minus from '../../icons/Minus-gray.svg';
import remove from '../../icons/Remove.svg';
import placeholder from '../../img/phones/apple-iphone-11/black/01.jpg';

interface BasketItemProps {
  item: Product,
  count: number,
}

export const BasketItem = ({ item, count }: BasketItemProps) => {
  return (
    <>
      <div className='basketItem'>
        <div className='basketItem__product'>
          <div className='basketItem__product-item'>
            <button className='basketItem__button basketItem__button--remove'>
              <img src={remove} alt="remove button" />
            </button>

            <img
              className='basketItem__product-item-photo'
              src={placeholder}
              alt="product photo"
            />
          </div>

          <span className='basketItem__product-name'>{item.name}</span>
        </div>

        <div className='basketItem__price'>
          <div className='basketItem__price-counter'>
            <button className='basketItem__button basketItem__button--minus'>
              <img src={minus} alt="minus button" />
            </button>

            <span className='basketItem__price-counter-number'>{count}</span>

            <button className='basketItem__button basketItem__button--plus'>
              <img src={plus} alt="plus button" />
            </button>
          </div>

          <span className='basketItem__price-total'>{`$${item.price}`}</span>
        </div>
      </div>
    </>
  );
};
