import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './pages/Home';
import CustomSet from './pages/CustomSet';
import Compendium from './pages/Compendium';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/custom-set' element={<CustomSet />} />
        <Route path='/compendium' element={<Compendium />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
