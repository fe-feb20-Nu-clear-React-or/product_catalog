import { Product } from '../../types/Product';
import './BasketItem.scss';
import plus from '../../icons/Plus.svg';
import minus from '../../icons/Minus-gray.svg';
import remove from '../../icons/Remove.svg';
import { BasketEdit } from '../../types/BasketEdit';

interface BasketItemProps {
  item: Product,
  count: number,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const BasketItem = ({item, count, onBasketIdsSet}: BasketItemProps) => {
  return (
    <>
      <div className='basketItem'>
        <div className='basketItem__product'>
          <div className='basketItem__product-item'>
            <button
              className='basketItem__button basketItem__button--remove'
              onClick={() => onBasketIdsSet(item.id, BasketEdit.REMOVE)}
            >
              <img src={remove} alt="remove button" />
            </button>

            <img
              className='basketItem__product-item-photo'
              src={require(`../../${item.image}`)}
              alt="product photo"
            />
          </div>

          <span className='basketItem__product-name'>{item.name}</span>
        </div>

        <div className='basketItem__price'>
          <div className='basketItem__price-counter'>
            <button
              className='basketItem__button basketItem__button--minus'
              onClick={() => onBasketIdsSet(item.id, BasketEdit.MINUS)}
            >
              <img src={minus} alt="minus button" />
            </button>

            <span className='basketItem__price-counter-number'>{count}</span>

            <button
              className='basketItem__button basketItem__button--plus'
              onClick={() => onBasketIdsSet(item.id, BasketEdit.ADD)}
            >
              <img src={plus} alt="plus button" />
            </button>
          </div>

          <span className='basketItem__price-total'>{`$${item.price}`}</span>
        </div>
      </div>
    </>
  );
};
