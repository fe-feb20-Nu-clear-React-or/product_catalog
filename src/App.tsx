import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Phones } from './components/Phones';
import { Home } from './components/Home/Home';

function App() {
  return (
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/phones" element={<Phones />}/>
          <Route path="/tablets" element={<h1>tablets</h1>}/>
          <Route path="/accessories" element={<h1>accessories</h1>}/>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>

      </div>
  );
}

export default App;
