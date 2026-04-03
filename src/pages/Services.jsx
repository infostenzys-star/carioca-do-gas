import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { companyData } from '../data/companyData';

const Services = () => {
  return (
    <div className="services-page">
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">Nossos <span className="text-gradient">Serviços</span></h1>
            <p className="section-desc">Especialização técnica garantida em todos os procedimentos para manter seu veículo sempre novo e seguro.</p>
          </div>
          
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {companyData.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'var(--color-surface)', borderRadius: '16px' }}>
            <h2>Precisa de um serviço específico?</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem' }}>Nossa equipe está pronta para avaliar e oferecer a melhor solução automotiva.</p>
            <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary">Falar com um Especialista</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
