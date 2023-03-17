import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
