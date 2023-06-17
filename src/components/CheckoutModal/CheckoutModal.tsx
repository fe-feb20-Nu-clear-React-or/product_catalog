import { Link } from "react-router-dom";
import { BasketEdit } from "../../types/BasketEdit";
import './CheckoutModal.scss';

interface CheckoutModalProps {
  totalPrice: number;
  itemAmount: number;
  basketIds: {[id: string]: number};
  onBasketIdsSet: (id: string, operation: BasketEdit) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  itemAmount,
  totalPrice,
  basketIds,
  onBasketIdsSet,
}) => {
  const handleClearCart = () => {
    const ids = Object.keys(basketIds);

    for (const id of ids) {
      onBasketIdsSet(id, BasketEdit.REMOVE);
    }
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-background" />

      <div className="checkout-success">
        <p className="checkout-success-title">Purchase successful!</p>

        <p className="checkout-success-subtitle">
          {`Thank you for your purchase of ${itemAmount} devices worth $${totalPrice}!`}
        </p>

        <Link
          to="/home"
          className="checkout-success-return"
          onClick={() => handleClearCart()}
        >
            Return to Home
        </Link>
      </div>
    </div>
  );
};
