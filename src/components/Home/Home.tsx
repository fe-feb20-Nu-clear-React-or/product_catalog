import './Home.scss';
import { Carousel } from '../Carousel/Carousel';
import { Header } from '../Header/Header';
import { Category } from '../Category/Category';
import { Resolution } from '../../types/Resolution';
import { BasketEdit } from '../../types/BasketEdit';

interface HomeProps {
  resolution: Resolution,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
}

export const Home:React.FC<HomeProps> = ({
  resolution, onBasketIdsSet
}) => {
  return (
    <main className="home">
      <header className="home__header">
        <Header resolution={resolution}/>
      </header>
      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          onBasketIdsSet={onBasketIdsSet}
        />
      </div>
      <div className="home__category">
        <Category />
      </div>
      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          onBasketIdsSet={onBasketIdsSet}
        />
      </div>
    </main>
  );
};
