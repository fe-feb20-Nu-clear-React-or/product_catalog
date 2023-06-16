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
  onFavsIdsSet: (id: string) => void,
  resolution: Resolution,
  favIds: string[],
}

export const Phones = ({
  onBasketIdsSet, onFavsIdsSet, basketIds, resolution, favIds,
}: PhonesProps) => {
  const items = useContext(ApiDataContext);

  const perPageHorizontal = handleItemsPerPageCalculate(resolution);

  console.log(perPageHorizontal);
  const [sortedItems, setSortedItems] = useState([...items]);
  const [filter, setFilter] = useState('none');
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

  useEffect(()=>{
    switch(filter){
      case 'cheapest':
        setSortedItems(()=>[...items].sort((a,b)=>(a.price-b.price)));
        break;
      case 'most expensive':
        setSortedItems(()=>[...items].sort((a,b)=>(b.price-a.price)));
        break;
      default:
        setSortedItems(items);
    }
  },[filter,sortedItems, currentPage]);

  const handleFilterSet = (filterValue:string) => {
    setFilter(filterValue);
    console.log('filter',filter);
  };

  useEffect(() => {
    setStartIndex((currentPage - 1) * perPageVertically);
    setEndIndex(currentPage * perPageVertically);
    console.log(perPageVertically);
  }, [perPageVertically, currentPage]);


  return (
    <section className="phones">
      <div className="phones__wrapper">
        <article className="phones__header">
          <div className="phones__header-path">
            <p className="phones__header-path-home-icon"></p>
            <p className="phones__header-path-page-name">
          &nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&nbsp;Phones
            </p>
          </div>
          <h1 className="phones__header-title">Mobile Phones</h1>
          <p className="phones__header-model-amount">95 models</p>
          <div className="phones__header-filters">
            <Filter
              title={'sort by'}
              options={['Newest',
                'cheapest', 'most expensive', 'most purchased']}
              onOptionChange={handleFilterSet}
            />
            <Filter
              title={'items on page'}
              options={['8', '12', '16', '32']}
              onOptionChange={handlePerPageVerticallySet}
            />
          </div>
        </article>
        <ul className="phones__list">
          {sortedItems.slice(startIndex, endIndex).map(item => (
            <li key={item.id} className="phones__list-item">
              <Card
                product={item}
                onBasketIdsSet={onBasketIdsSet}
                onFavsIdsSet={onFavsIdsSet}
                count={basketIds[item.id]}
                style={{ opacity: 1 }}
                currentPage={Page.PHONES}
                favIds={favIds}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="phones__pagination">
        <Pagination
          total={sortedItems.length}
          perPage={perPageVertically}
          currentPage={currentPage}
          onPageChange={handlePageSwitch}
        />
      </div>
    </section>
  );
};
