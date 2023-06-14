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
      <Header resolution={resolution}/>
      <Carousel resolution={resolution}/>
      <Category />
      <Carousel resolution={resolution}/>
    </main>
  );
};
