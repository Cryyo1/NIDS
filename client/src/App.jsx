import './App.css';
import React from 'react';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
