import plus from '../../icons/Plus.svg';
import minus from '../../icons/Minus-gray.svg';
import { Product } from '../../types/Product';
import { BasketEdit } from '../../types/BasketEdit';
import './Counter.scss';

interface CounterProps {
  item: Product,
  count: number,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const Counter = ({item, count, onBasketIdsSet}:CounterProps) => {
  return (
    <div className='counter'>
      <button
        className='counter__button counter__button--minus'
        onClick={() => onBasketIdsSet(item.id, 'minus')}
      >
        <img src={minus} alt="minus button" />
      </button>

      <span className='counter__number'>{count}</span>

      <button
        className='counter__button counter__button--plus'
        onClick={() => onBasketIdsSet(item.id, 'add')}
      >
        <img src={plus} alt="plus button" />
      </button>
    </div>
  );
};
