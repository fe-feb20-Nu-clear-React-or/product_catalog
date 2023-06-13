import React from 'react';
import './App.scss';
import './styles/footer.scss'
import './styles/back-to-top.scss'
import { NavBar } from './components/NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Phones } from './components/Phones';
import { Footer } from './components/Footer';
import {ApiDataProvider} from './ApiDataContext';
import { Home } from './components/Home';

function App() {
  

  return (
      <div className="App">
        <ApiDataProvider>
        <NavBar />
        
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/phones" element={<Phones />}/>
          <Route path="/tablets" element={<h1>tablets</h1>}/>
          <Route path="/accessories" element={<h1>accessories</h1>}/>
        </Routes>

        <Footer />
        </ApiDataProvider>
      </div>
  );
}

export default App;
