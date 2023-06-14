import './Home.scss';
import { Carousel } from '../Carousel/Carousel';
import { Header } from '../Header/Header';
import { Category } from '../Category/Category';
import { Resolution } from '../../types/Resolution';

interface HomeProps {
  resolution: Resolution,
}

export const Home:React.FC<HomeProps> = ({resolution}) => {
  return (
    <main className="home">
      <header className="home__header">
        <Header resolution={resolution}/>
      </header>
      <div className="home__carousel">
        <Carousel resolution={resolution}/>
      </div>
      <div className="home__category">
        <Category />
      </div>
      <div className="home__carousel">
        <Carousel resolution={resolution}/>
      </div>
    </main>
  );
};
