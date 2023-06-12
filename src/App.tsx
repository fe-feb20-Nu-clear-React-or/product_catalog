import React from 'react';
import './App.scss';
import { NavBar } from './components/NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Phones } from './components/Phones';

function App() {
  return (
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/home" element={<h1>home</h1>}/>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/phones" element={<Phones />}/>
          <Route path="/tablets" element={<h1>tablets</h1>}/>
          <Route path="/accessories" element={<h1>accessories</h1>}/>
        </Routes>
      </div>
  );
}

export default App;
