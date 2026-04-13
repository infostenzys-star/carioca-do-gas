import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { companyData } from '../data/companyData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Brand Info */}
        <div className="footer-brand">
          <h3 className="footer-title text-gradient">{companyData.name}</h3>
          <p className="footer-tagline">{companyData.tagline}</p>
          <div className="footer-socials">
            <a href={companyData.social.instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href={companyData.social.facebook} className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">Contato</h4>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="contact-icon" />
              <span>{companyData.phone}</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>{companyData.email}</span>
            </li>
            <li className="address-item" style={{ alignItems: 'flex-start' }}>
              <MapPin size={18} className="contact-icon" style={{ marginTop: '4px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span>{companyData.address}</span>
                <a href={companyData.mapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                  📍 Ver no Mapa
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
        <p className="footer-madeby">Desenvolvido com tecnologia de ponta da InfoStenzys 🚀</p>
      </div>
    </footer>
  );
};

export default Footer;
