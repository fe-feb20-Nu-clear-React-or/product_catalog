import './Home.scss';
import { Carousel } from '../Carousel/Carousel';
import { Header } from '../Header/Header';
import { Category } from '../Category/Category';
import { Resolution } from '../../types/Resolution';

interface HomeProps {
  resolution: Resolution,
  handleSetBasketIds: (id: string) => void,
}

export const Home:React.FC<HomeProps> = ({
  resolution, handleSetBasketIds
}) => {
  return (
    <main className="home">
      <header className="home__header">
        <Header resolution={resolution}/>
      </header>
      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          handleSetBasketIds={handleSetBasketIds}
        />
      </div>
      <div className="home__category">
        <Category />
      </div>
      <div className="home__carousel">
        <Carousel
          resolution={resolution}
          handleSetBasketIds={handleSetBasketIds}
        />
      </div>
    </main>
  );
};
