import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SillyItemsPage from './Pages/SillyItemsPage';

const HomePage = () => (
  <div className="App">
      <header className="App-header">
        <h1>Welcome to Asillyzon</h1>
        <p>Your one-stop shop for all things silly!</p>
        <p>Discover a world of laughter and joy with our unique collection of silly products.</p>
        <Link to="/silly-items"> Explore Now </Link>
      </header>
  </div>
);

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/silly-items" element={<SillyItemsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
