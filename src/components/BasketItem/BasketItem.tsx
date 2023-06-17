import { Product } from '../../types/Product';
import './BasketItem.scss';
import remove from '../../icons/Remove.svg';
import { BasketEdit } from '../../types/BasketEdit';
import { Counter } from '../Counter/Counter';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';

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

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // github doesnt tolerate require() thats why this weird logic is needed
    const loadImage = async () => {
      try {
        const imageModule = await import(`../../${item.image}`);

        setImageSrc(imageModule.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [item.image]);

  return (
    <div className="basketItem">
      <div className="basketItem__product">
        <div className="basketItem__product-item">
          <button
            className="basketItem__button basketItem__button--remove"
            onClick={() => onBasketIdsSet(item.id, BasketEdit.REMOVE)}
          >
            <img src={remove} alt="remove button" />
          </button>

          {imageSrc
            ?  <img
              className="basketItem__product-item-photo"
              src={imageSrc}
              alt="product photo"
            />
            :<Loader />}
        </div>

        <span className="basketItem__product-name">{item.name}</span>
      </div>

      <div className="basketItem__price">
        <Counter onBasketIdsSet={onBasketIdsSet} item={item} count={count} />

        <span className="basketItem__price-total">{`$${item.price * count}`}</span>
      </div>
    </div>
  );
};

