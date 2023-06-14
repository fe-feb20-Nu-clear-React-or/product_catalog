import { useContext, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './Carousel.scss';
import ApiDataContext from '../../ApiDataContext';
import { Resolution } from '../../types/Resolution';

interface CarouselProps {
  resolution: Resolution,
}

export const Carousel:React.FC<CarouselProps> = ({resolution}) => {
  const perPage = function(){
    switch (resolution) {
      case Resolution.MOBILE:
        return 2;
      case Resolution.TABLET:
        return 3;
      case Resolution.DESKTOP:
        return 4;
    }
  }();
  const [currentPage, setCurrentPage] = useState(1);
  const [startItem, setStartItem] = useState((currentPage - 1) * perPage + 1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_endItem, setEndItem] = useState(currentPage * perPage);
  
  const items = useContext(ApiDataContext);
  
  const onPageChange = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };
  
  useEffect(() => {
    setStartItem((currentPage - 1) * perPage + 1);
    setEndItem(currentPage * perPage);
  }, [currentPage, perPage]);
  
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
    
  const handleNextClick = () => {
    if (Math.ceil(items.length / perPage) > currentPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <section className="carousel">
      <article className="carousel__header">
        <h2 className="carousel__title">
          Brand new
          <br />
          models
        </h2>
        <div className="carousel__switch-buttons">
          <button
            type="button"
            className="carousel__switch-button"
            onClick={handlePreviousClick}
          >
            {'<'}
          </button>
          <button
            type="button"
            className="carousel__switch-button"
            onClick={handleNextClick}
          >
            {'>'}
          </button>
        </div>
      </article>

      <article className="carousel__card-list">
        {items.map((item, i) => {
          const n = i - startItem - 1;

          if (n >= 0 && n < perPage) {
            return (
              <Card key={item.id} product={item} />
            );
          }

          return null;
        })}
      </article>
    </section>
  );
};
