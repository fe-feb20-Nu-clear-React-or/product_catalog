import { useContext, useState } from 'react';
import { Card } from '../Card/Card';
import './Carousel.scss';
import ApiDataContext from '../../ApiDataContext';
import { Resolution } from '../../types/Resolution';
import { Page } from '../../types/Page';
import { handleItemsPerPageCalculate } from '../../assets/_functions';
import { BasketEdit } from '../../types/BasketEdit';
<<<<<<< HEAD
=======

>>>>>>> 310025f6ed49c3e1fb0820c3b704a36ba236506d

interface CarouselProps {
  resolution: Resolution,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const Carousel:React.FC<CarouselProps> = ({
  resolution, onBasketIdsSet
}) => {
  const perPage = handleItemsPerPageCalculate(resolution);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(perPage);
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);
  const [willLastItem, setWillLastItem] = useState(false);

  const items = useContext(ApiDataContext);

  const handlePreviousClick = () => {
    if (startIndex > 0) {
      const stepBack = startIndex - perPage;

      setWillLastItem(false);
      setIsLastItem(false);
      setEndIndex(startIndex);
      setStartIndex(stepBack < 0 ? 0 : stepBack);

    } else {
      setIsFirstItem(true);
    }
  };

  const handleNextClick = () => {
    const itemsLength = items.length;

    if (endIndex < itemsLength) {
      const stepForward = endIndex + perPage;

      setIsFirstItem(false);
      setStartIndex(endIndex);
      setEndIndex(stepForward >= itemsLength ? itemsLength : stepForward);

      if (endIndex + perPage > itemsLength) {
        setWillLastItem(true);
      } else {
        setWillLastItem(false);
      }

    } else {
      setIsLastItem(true);
    }
  };

  const renderVisibleCards = () => {
    return items.slice(startIndex, endIndex).map((item) => (
      <Card
        key={item.id}
        product={item}
        style={{opacity: 1}}
        onBasketIdsSet={onBasketIdsSet}
        currentPage={Page.HOME}
      />
    ));
  };

  const renderHiddenCards = () => {
    const hiddenCardsCount = perPage - (items.length % perPage);

    return items.slice(0, hiddenCardsCount).map((item) => (
      <Card
        key={item.id}
        product={item}
        style={{ opacity: 0 }}
        onBasketIdsSet={onBasketIdsSet}
        currentPage={Page.HOME}
      />
    ));
  };

  return (
    <section className="carousel">
      <article className="carousel__header">
        <h2 className="carousel__title">
          Brand new
          {resolution === Resolution.MOBILE ? <br /> : <>&nbsp;</>}
          models
        </h2>
        <div className="carousel__switch-buttons">
          <button
            type="button"
            className="carousel__switch-button"
            onClick={handlePreviousClick}
            disabled={isFirstItem}
          >
            {'<'}
          </button>
          <button
            type="button"
            className="carousel__switch-button"
            onClick={handleNextClick}
            disabled={isLastItem}
          >
            {'>'}
          </button>
        </div>
      </article>

      <article className="carousel__card-list">
        {willLastItem ? (
          <>
            {renderVisibleCards()}
            {renderHiddenCards()}
          </>
        ) : (
          renderVisibleCards()
        )}
      </article>
    </section>
  );
};
