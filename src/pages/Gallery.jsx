import React from 'react';
import { Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/companyData';
import './Gallery.css';

const Gallery = () => {
  const { gallery } = companyData;

  return (
    <div className="gallery-page">
      <section className="section-padding">
        <div className="container">
          <div className="gallery-header">
            <Link to="/servicos" className="back-link">
              <ArrowLeft size={20} /> Voltar para Serviços
            </Link>
            <h1 className="section-title">Nossa <span className="text-gradient">Galeria de Instalações</span></h1>
            <p className="section-desc">
              Confira a qualidade técnica e o acabamento impecável das nossas conversões para GNV em diversos modelos de veículos.
            </p>
          </div>

          {gallery && gallery.length > 0 ? (
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div key={index} className="gallery-item surface-glass">
                  <div className="gallery-image-wrapper">
                    <img src={item.url} alt={item.alt || `Instalação GNV ${index + 1}`} loading="lazy" />
                    <div className="gallery-overlay">
                      <span className="car-model">{item.model}</span>
                      <span className="kit-type">{item.kit}</span>
                    </div>
                  </div>
                  {item.description && (
                    <div className="gallery-info">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty surface-glass">
              <Camera size={64} className="empty-icon" />
              <h2>Em breve novidades</h2>
              <p>Estamos preparando fotos exclusivas das nossas instalações mais recentes. Volte em breve!</p>
              <div className="empty-cta">
                <a href={`https://wa.me/${companyData.whatsapp}`} className="btn btn-primary">
                  Solicitar Fotos pelo WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
