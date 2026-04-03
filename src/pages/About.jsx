import React from 'react';
import { CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

const About = () => {
  return (
    <div className="about-page">
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Sobre a <span className="text-gradient">Carioca do Gás</span></h1>
            <p className="section-desc">Tradição, tecnologia e confiança em conversão GNV e manutenção automotiva em Manaus.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
            
            <div style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                A <strong>{companyData.name}</strong> nasceu com o objetivo de oferecer uma alternativa econômica e sustentável para os motoristas, sem abrir mão da performance e segurança. Somos especialistas na instalação e manutenção de sistemas GNV das gerações mais modernas.
              </p>
              <p>
                Nossa oficina é equipada com scanners de injeção eletrônica de última geração e ferramentas específicas para testes de estanqueidade e regulagem fina, garantindo que o seu veículo funcione de forma impecável tanto no gás quanto no combustível líquido.
              </p>
            </div>

            <div className="surface-glass" style={{ padding: '3rem', borderRadius: '24px', width: '100%', maxWidth: '800px' }}>
              <h3 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem' }}>Nossos Diferenciais</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {['Oficina Homologada', 'Técnicos Certificados', 'Equipamentos de Ponta', 'Garantia de Serviço'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle color="var(--color-primary)" />
                    <span style={{ fontWeight: '600' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
