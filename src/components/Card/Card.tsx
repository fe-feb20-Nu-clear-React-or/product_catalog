import { Product } from '../../types/Product';
import './Card.scss';

interface Props {
  product:Product;
}

export const Card:React.FC<Props> = ({product}) => {
  return (
        

    <section className="card">
      <img 
        className="card__photo"
        src="images/imac.jpeg"
        alt={product.name}
      ></img>
      
      <h1 className="card__name">{product.name}</h1>
  
      <h2 className="card__code">Product code: 195434</h2>
  
      <div className="card__rate">
         
        <div className="card__reviews">Reviews: 5</div>
      </div>
        
      <div className="card__price">
        <div className="card__priceText">Price:</div>
        <div className="card__priceNumber">$2,199</div>
      </div>
  
      <a className="card__buyButton" data-qa="hover">Buy</a>
  
    </section>
  );
};
