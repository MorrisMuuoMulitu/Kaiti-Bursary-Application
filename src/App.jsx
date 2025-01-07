import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Application from './pages/Application';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <div className="nav-container">
            <div className="logo">Kaiti Constituency</div>
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/apply" onClick={toggleMenu}>Apply</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </nav>
            <div 
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Application />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
