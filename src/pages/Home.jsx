import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { companyData } from '../data/companyData';
import logoImg from '../assets/Logo.jpeg';
import fachadaImg from '../assets/fachada.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <img src={logoImg} alt="Logo Carioca do Gás" className="hero-logo" />
            <h1 className="hero-title">
              Potência e Economia <br/>
              <span className="text-gradient">Levados a Sério</span>
            </h1>
            <p className="hero-subtitle">
              {companyData.tagline} Tecnologia de ponta em conversão para GNV e manutenção especializada automotiva com estética premium e segurança garantida.
            </p>
            <div className="hero-buttons">
              <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary" size="lg">
                Fazer Orçamento Grátis
              </Button>
              <Link to="/servicos" className="btn btn-secondary btn-lg">
                Ver Serviços <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle size={20} className="trust-icon" />
                <span>Especialistas Certificados</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={20} className="trust-icon" />
                <span>Kit GNV 5ª e 6ª Geração</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossas <span className="text-gradient">Soluções</span></h2>
            <p className="section-desc">Oferecemos o cuidado mecânico completo que seu veículo precisa para rodar com eficiência.</p>
          </div>
          
          <div className="services-grid">
            {companyData.services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/servicos">
              <Button variant="secondary">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding gallery-preview" style={{ background: 'rgba(0, 166, 80, 0.03)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Resultados de <span className="text-gradient">Excelência</span></h2>
            <p className="section-desc">Confira algumas de nossas instalações recentes e a qualidade do nosso acabamento.</p>
          </div>
          
          <div className="gallery-preview-grid">
            {companyData.gallery.slice(0, 4).map((item, index) => (
              <Link to="/galeria" key={index} className="gallery-preview-item">
                <img src={item.url} alt={item.model} />
                <div className="gallery-preview-overlay">
                  <span>{item.model}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/galeria">
              <Button variant="secondary">Ver Galeria Completa</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding location-section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Onde nos <span className="text-gradient">Encontrar</span></h2>
            <p className="section-desc">Venha nos visitar em nossa oficina equipada em Manaus.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <iframe 
                src={companyData.embedMapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carioca do Gás"
              ></iframe>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <img src={fachadaImg} alt="Fachada da Carioca do Gás" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
              <a href={companyData.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-md" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                📍 Abrir no GPS (Traçar Rota)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container surface-glass">
          <div className="cta-content">
            <h2>Pronto para economizar combustível?</h2>
            <p>Agende uma avaliação do seu veículo na oficina mais moderna e equipada de Manaus.</p>
          </div>
          <div className="cta-action">
            <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary" size="lg">
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
