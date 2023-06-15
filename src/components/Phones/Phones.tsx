import { Card } from '../Card/Card';
import { useContext, useEffect, useState } from 'react';
import { Filter } from "../Filter/Filter";
import ApiDataContext from '../../ApiDataContext';
import './Phones.scss';
import { Page } from '../../types/Page';
import { Pagination } from '../Pagination/Pagination';
import { Resolution } from '../../types/Resolution';
import { handleItemsPerPageCalculate } from '../../assets/_functions';
import { BasketEdit } from '../../types/BasketEdit';

interface PhonesProps {
  basketIds: {[id: string]: number},
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  resolution: Resolution,
}

export const Phones = ({onBasketIdsSet, basketIds, resolution}:PhonesProps) => {
  const items = useContext(ApiDataContext);

  const perPageHorizontal = handleItemsPerPageCalculate(resolution);

  console.log(perPageHorizontal);
  const [currentPage, setCurrentPage] = useState(1);

  const [perPageVertically, setPerPageVertically] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(perPageVertically);

  const handlePageSwitch = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageVerticallySet = (value: string) => {
    setPerPageVertically(+value);
    setCurrentPage(1);
  };

  console.log(items.length);

  const handleFilterSet = () => {
    return 1;
  };

  useEffect(() => {
    setStartIndex((currentPage - 1) * perPageVertically);
    setEndIndex(currentPage * perPageVertically);
    console.log(perPageVertically);
  }, [perPageVertically, currentPage]);


  return (
    <section className="phones">
      <article className="phones__header">
        <div className="phones__header-path">
          <p className="phones__header-path-home-icon"></p>
          <p
            className="phones__header-path-page-name"
          >
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            {'>'}<>&nbsp;&nbsp;&nbsp;&nbsp;</>
            Phones
          </p>
        </div>
        <h1 className="phones__header-title">Mobile Phones</h1>
        <p className="phones__header-model-amount">95 models</p>
      </article>
      <ul className="phones__list">
        <div className="phones__list-filters">
          <Filter
            title={'sort by'}
            options={['Newest',
              'cheapest',
              'most expensive',
              'most purchased']}
            onOptionChange={handleFilterSet}

          />
          <Filter
            title={'items on page'}
            options={['8',
              '12',
              '16',
              '32']}
            onOptionChange={handlePerPageVerticallySet}
          />
        </div>
        {items.slice(startIndex, endIndex).map(item => (
          <li key={item.id} className="phones__list-item">
            <Card
              product={item}
              onBasketIdsSet={onBasketIdsSet}
              count={basketIds[item.id]}
              style={{opacity: 1}}
              currentPage={Page.PHONES}
            />
          </li>
        ))}
      </ul>
      <div className="phones__pagination">
        <Pagination
          total={items.length}
          perPage={perPageVertically}
          currentPage={currentPage}
          onPageChange={handlePageSwitch}
        />
      </div>
    </section>
  );
};
