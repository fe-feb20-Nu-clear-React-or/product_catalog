import './App.scss';
import { Routes, Route/*, Navigate*/ } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.scss';
import { Phones } from './components/Phones/Phones';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import { ApiDataProvider } from './ApiDataContext';
import { Home } from './components//Home/Home';
import { Resolution } from './types/Resolution';
import { NotFoundPage } from './components/NotFoundPage';
import { Navbar } from './components/Navbar/Navbar';
import { Basket } from './components/Basket/Basket';
import { useLocalStorage } from 'usehooks-ts';
import { BasketEdit } from './types/BasketEdit';
import items from './api/phones.json';
import { Favourites } from './components/Favourites/Favourites';

function App() {
  const [
    basketIds, setBasketIds
  ] = useLocalStorage<{[id: string]: number}>('basketIds', {});
  const [
    favIds, setFavIds
  ] = useLocalStorage<string[]>('favIds', []);
  const [totalFavs, setTotalFavs] = useLocalStorage('totalFavs', 0);
  const [totalItems, setTotalItems] = useLocalStorage('totalItems', 0);
  const [totalCost, setTotalCost] = useLocalStorage('totalCost', 0);

  const handleFavsIdsSet = (id: string) => {
    const index = favIds.indexOf(id);

    if (index !== -1) {
      setTotalFavs(+totalFavs - 1);
      setFavIds(favIds.filter(favid => favid !== id));
    } else {
      setTotalFavs(+totalFavs + 1);
      setFavIds([...favIds, id]);
    }

    console.log(favIds, id);
  };

  const handleBasketIdsSet = (id: string, operation: BasketEdit) => {
    setBasketIds(() => {
      const basketIdsCopy: {[id: string]: number} = {...basketIds};

      switch(operation) {
        case 'add':
          basketIdsCopy[id] = basketIdsCopy[id] || 0;
          basketIdsCopy[id]++;
          break;
        case 'minus':
          basketIdsCopy[id]--;
          basketIdsCopy[id] <= 0 && delete basketIdsCopy[id];
          break;
        case 'remove':
          delete basketIdsCopy[id];
      }

      let total = 0;
      let cost = 0;

      for (const id in basketIdsCopy) {
        const amout = basketIdsCopy[id];
        const item = items.find(item => item?.id === id);

        total += amout;
        cost += (item?.price || 0) * amout;
      }

      setTotalItems(total);
      setTotalCost(cost);

      return basketIdsCopy;
    });
  };

  console.log(basketIds);

  const handleResolutionSet = () => {
    if (window.innerWidth < 640) {
      return Resolution.MOBILE;
    }

    if (window.innerWidth < 1200) {
      return Resolution.TABLET;
    }

    return Resolution.DESKTOP;

  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resolution, setResolution]
    = useState<Resolution>(handleResolutionSet());

  const handlesetIsMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(()=> {

    window.addEventListener('resize', () => {
      setResolution(handleResolutionSet());
    });

    return () => {
      window.removeEventListener('resize', handleResolutionSet);
    };

  }, []);

  return (
    <div className="App">
      <ApiDataProvider>
        <Navbar
          isMenuOpen={isMenuOpen}
          handleSetIsMenuOpen={handlesetIsMenuOpen}
          resolution={resolution}
          totalItems={totalItems}
          totalFavs={totalFavs}
        />
        {isMenuOpen
          ? (<BurgerMenu
            handleSetIsMenuOpen={handlesetIsMenuOpen}
            totalItems={totalItems}
            totalFavs={totalFavs}
          />)
          : (
            <>
              <Routes>
                <Route path="/home" element={<Home
                  resolution={resolution}
                  basketIds={basketIds}
                  favIds={favIds}
                  onBasketIdsSet={handleBasketIdsSet}
                  onFavsIdsSet={handleFavsIdsSet} />}
                />
                {/* <Route path="/" element={<Navigate to="/home" />} /> */}
                <Route
                  path="/phones"
                  element={<Phones
                    basketIds={basketIds}
                    onBasketIdsSet={handleBasketIdsSet}
                    onFavsIdsSet={handleFavsIdsSet}
                    favIds={favIds}
                    resolution={resolution} />}
                />
                <Route path="/tablets" element={<h1>tablets</h1>} />
                <Route path="/accessories" element={<h1>accessories</h1>} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cart" element={<Basket
                  totalCost={totalCost}
                  totalItems={totalItems}
                  basketIds={basketIds}
                  onBasketIdsSet={handleBasketIdsSet} />}
                />
                <Route path="/favourites" element={<Favourites
                  resolution={resolution}
                  basketIds={basketIds}
                  favIds={favIds}
                  onBasketIdsSet={handleBasketIdsSet}
                  onFavsIdsSet={handleFavsIdsSet} />}
                />
              </Routes>
              <Footer />
            </>

          )}
      </ApiDataProvider>
    </div>
  );
}

export default App;
