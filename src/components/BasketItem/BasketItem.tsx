import { Product } from '../../types/Product';
import './BasketItem.scss';
import remove from '../../icons/Remove.svg';
import { BasketEdit } from '../../types/BasketEdit';
import { Counter } from '../Counter/Counter';

interface BasketItemProps {
  item: Product,
  count: number,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const BasketItem: React.FC<BasketItemProps> = ({
  item,
  count,
  onBasketIdsSet,
}) => {
  const { id, image, name, price } = item;

  return (
    <div className="basketItem">
      <div className="basketItem__product">
        <div className="basketItem__product-item">
          <button
            className="basketItem__button basketItem__button--remove"
            onClick={() => onBasketIdsSet(id, BasketEdit.REMOVE)}
          >
            <img src={remove} alt="remove button" />
          </button>

          <img
            className="basketItem__product-item-photo"
            src={require(`../../images/${image}`)}
            alt="product photo"
          />
        </div>

        <span className="basketItem__product-name">{name}</span>
      </div>

      <div className="basketItem__price">
        <Counter onBasketIdsSet={onBasketIdsSet} item={item} count={count} />

        <span className="basketItem__price-total">{`$${price * count}`}</span>
      </div>
    </div>
  );
};

