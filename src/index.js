import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import Article from './Article';
import About from './About';
import Help from './Help';
import Privacy from './Privacy';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Content />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

