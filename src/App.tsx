import React, { useEffect, useState } from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Phones } from './components/Phones';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import {ApiDataProvider} from './ApiDataContext';
import { Home } from './components//Home/Home';
import { Resolution } from './types/Resolution';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resolution, setResolution] = useState<Resolution>()

  const handlesetIsMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(()=> {
    const handleResolutionSet = () => {
      if (window.innerWidth < 640) {
        setResolution(Resolution.MOBILE);
      } else if (window.innerWidth < 1200) {
        setResolution(Resolution.TABLET);
      } else {
        setResolution(Resolution.DESKTOP);
      }
    }

    handleResolutionSet();

    window.addEventListener('resize', handleResolutionSet);

    return () => {
      window.removeEventListener('resize', handleResolutionSet);
    }
  }, []);

  console.log(resolution);

  return (
      <div className="App">
        <ApiDataProvider>
        <Navbar isMenuOpen={isMenuOpen} handleSetIsMenuOpen={handlesetIsMenuOpen} />
        {isMenuOpen
        ? (<BurgerMenu handleSetIsMenuOpen={handlesetIsMenuOpen} />)
        : (
          <>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/phones" element={<Phones />}/>
              <Route path="/tablets" element={<h1>tablets</h1>}/>
              <Route path="/accessories" element={<h1>accessories</h1>}/>
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
            <Footer />
          </>
        )}
        </ApiDataProvider>
      </div>
  );
}

export default App;
