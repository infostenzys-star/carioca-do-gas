import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';
import { companyData } from '../data/companyData';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre a Oficina', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="navbar surface-glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Wrench className="logo-icon" size={28} />
          <span className="logo-text">{companyData.name}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navbar-cta">
          <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary" size="sm">
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''} surface-glass`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="mobile-link"
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
        <div className="mobile-cta">
           <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary">
            Agendar Pelo WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
