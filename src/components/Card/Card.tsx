import { Product } from '../../types/Product';
import './Card.scss';

interface Props {
    product:Product;
}

export const Card:React.FC<Props> = ({product}) => {
    return (
        <div className="card">{product.name}</div>
    )
};
