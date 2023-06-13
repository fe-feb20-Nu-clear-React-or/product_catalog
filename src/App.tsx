import React, { useState } from 'react';
import './App.scss';
import { NavBar } from './components/NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Phones } from './components/Phones';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlesetIsMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
      <div className="App">
        <NavBar isMenuOpen={isMenuOpen} handleSetIsMenuOpen={handlesetIsMenuOpen} />
        {isMenuOpen 
        ? (<BurgerMenu handleSetIsMenuOpen={handlesetIsMenuOpen} />)
        : (
          <Routes>
            <Route path="/home" element={<h1>home</h1>}/>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/phones" element={<Phones />}/>
            <Route path="/tablets" element={<h1>tablets</h1>}/>
            <Route path="/accessories" element={<h1>accessories</h1>}/>
          </Routes>
        )}
        
        
      </div>
  );
}

export default App;
