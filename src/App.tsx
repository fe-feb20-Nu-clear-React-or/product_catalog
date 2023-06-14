import React, { useState } from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Phones } from './components/Phones';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import { ApiDataProvider } from './ApiDataContext';
import { Home } from './components//Home/Home';
import { NotFoundPage } from './components/NotFoundPage';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handlesetIsMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="App">
      <ApiDataProvider>
         <Navbar isMenuOpen={isMenuOpen} handleSetIsMenuOpen={handlesetIsMenuOpen} />
        {isMenuOpen 
        ? (<BurgerMenu handleSetIsMenuOpen={handlesetIsMenuOpen} />)
        : (
        <>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<h1>tablets</h1>} />
          <Route path="/accessories" element={<h1>accessories</h1>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
        </>
        )}
      </ApiDataProvider>
    </div>
  );
}

export default App;
