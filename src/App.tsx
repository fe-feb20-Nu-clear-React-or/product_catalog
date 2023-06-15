import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.scss';
import { Phones } from './components/Phones';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import { ApiDataProvider } from './ApiDataContext';
import { Home } from './components//Home/Home';
import { Resolution } from './types/Resolution';
import { NotFoundPage } from './components/NotFoundPage';
import { Navbar } from './components/Navbar/Navbar';
import { Basket } from './components/Basket/Basket';
import { useLocalStorage } from 'usehooks-ts';

function App() {
  const [
    basketIds, setBasketIds
  ] = useLocalStorage<{[id: string]: number}>('basketIds', {});

  const handleBasketIdsSet = (id: string) => {
    setBasketIds(() => {
      const basketIdsCopy: {[id: string]: number} = {...basketIds};

      basketIdsCopy[id] = basketIdsCopy[id] || 0;
      basketIdsCopy[id]++;

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

  console.log(resolution);

  return (
    <div className="App">
      <ApiDataProvider>
        <Navbar
          isMenuOpen={isMenuOpen}
          handleSetIsMenuOpen={handlesetIsMenuOpen}
          resolution={resolution}
        />
        {isMenuOpen
          ? (<BurgerMenu handleSetIsMenuOpen={handlesetIsMenuOpen} />)
          : (
            <>
              <Routes>
                <Route path="/home" element={
                  <Home
                    resolution={resolution}
                    onBasketIdsSet={handleBasketIdsSet}
                  />
                }/>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/phones" element={<Phones />}/>
                <Route path="/tablets" element={<h1>tablets</h1>}/>
                <Route path="/accessories" element={<h1>accessories</h1>}/>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cart" element={<Basket basketIds={basketIds}/>}/>
                <Route path="/favourites" element={<h1>favourites</h1>}/>
              </Routes>
              <Footer />
            </>
          )}
      </ApiDataProvider>
    </div>
  );
}

export default App;
