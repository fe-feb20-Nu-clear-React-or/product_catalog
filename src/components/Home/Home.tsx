import './Home.scss';
import { Carousel } from '../Carousel/Carousel';
import { Header } from '../Header/Header';
import { Category } from '../Category/Category';
import { Resolution } from '../../types/Resolution';
import { BasketEdit } from '../../types/BasketEdit';

interface HomeProps {
  resolution: Resolution,
  basketIds: {[id: string]: number},
  favIds: string[],
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  onFavsIdsSet: (id: string) => void,
}

export const Home:React.FC<HomeProps> = ({
  resolution,
  basketIds,
  favIds,
  onBasketIdsSet,
  onFavsIdsSet,
}) => {
  return (
    <main className="home">
      <header className="home__header">
        <Header resolution={resolution}/>
      </header>

      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          basketIds={basketIds}
          favIds={favIds}
          onBasketIdsSet={onBasketIdsSet}
          onFavsIdsSet={onFavsIdsSet}
        />
      </div>

      <div className="home__category">
        <Category />
      </div>

      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          basketIds={basketIds}
          favIds={favIds}
          onBasketIdsSet={onBasketIdsSet}
          onFavsIdsSet={onFavsIdsSet}
        />
      </div>
    </main>
  );
};
