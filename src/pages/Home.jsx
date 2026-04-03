import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { companyData } from '../data/companyData';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
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
