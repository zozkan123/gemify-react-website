import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Change language
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Apply RTL for Arabic
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={handleLanguageChange}
        />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/collections" element={<Collections language={language} />} />
            <Route path="/blog" element={<Blog language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/privacy" element={<Privacy language={language} />} />
            <Route path="/terms" element={<Terms language={language} />} />
          </Routes>
        </main>
        
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;

