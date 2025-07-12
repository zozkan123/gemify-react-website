import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = ({ theme, toggleTheme, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/collections', label: 'Collections' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      collections: 'Collections',
      blog: 'Blog',
      contact: 'Contact'
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      collections: 'Colecciones',
      blog: 'Blog',
      contact: 'Contacto'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      collections: 'Collections',
      blog: 'Blog',
      contact: 'Contact'
    },
    ar: {
      home: 'الرئيسية',
      about: 'حول',
      collections: 'المجموعات',
      blog: 'المدونة',
      contact: 'اتصل'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <>
      <style jsx>{`
        .luxury-ampersand {
          font-family: "Baskerville", "Goudy Old Style", "Palatino", "Book Antiqua", serif;
          font-size: 120%;
          font-style: italic;
          font-weight: 300;
          color: #D4AF37;
          position: relative;
          display: inline-block;
          transform: translateY(-0.08em);
          letter-spacing: -0.03em;
          transition: all 0.3s ease;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .brand-name:hover .luxury-ampersand {
          color: #B8860B;
          transform: translateY(-0.08em) scale(1.05);
        }
        
        .logo-text-enhanced {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: "Didot", "Bodoni MT", serif;
          font-weight: 300;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group brand-name">
              <img 
                src={logo} 
                alt="Gemify & Co." 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-playfair text-2xl font-bold text-primary-gold hidden sm:block logo-text-enhanced">
                Gemify <span className="luxury-ampersand">&</span> Co.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-inter font-medium transition-all duration-300 hover:text-primary-gold relative ${
                    location.pathname === item.path 
                      ? 'text-primary-gold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {t[item.label.toLowerCase()]}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-gold"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-20 border-primary-gold text-primary-gold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="fr">FR</SelectItem>
                  <SelectItem value="ar">AR</SelectItem>
                </SelectContent>
              </Select>

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden border-primary-gold text-primary-gold"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-inter font-medium transition-colors duration-300 hover:text-primary-gold ${
                      location.pathname === item.path 
                        ? 'text-primary-gold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {t[item.label.toLowerCase()]}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
