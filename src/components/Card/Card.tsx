import { Product } from '../../types/Product';
import './Card.scss';

interface Props {
  product:Product;
<<<<<<< HEAD
  style: React.CSSProperties;
  onBasketIdsSet: (id: string) => void,
}



export const Card:React.FC<Props> = ({product, onBasketIdsSet, style}) => {
=======
  style: React.CSSProperties,
  handleSetBasketIds: (id: string) => void,
}

export const Card:React.FC<Props> = ({product, style, handleSetBasketIds}) => {
>>>>>>> 5df14669e5c831492b5b219acdf06c629e6f816b
  return (
    <section className="card" style={style}>
      <img
        className="card__photo"
        src={require(`../../${product.image}`)}
        alt={product.name}
      ></img>
      <h1 className="card__name">{product.name}</h1>
      <div className="card__price">${product.price}</div>

      <div className='card__divider'></div>

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
        <a
          className="card__buttons--buy"
          onClick={() => onBasketIdsSet(product.id)}
        >
            Buy
        </a>
        <a className="card__buttons--fav">3</a>
      </div>
    </section>
  );
};
