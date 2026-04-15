import React from 'react';
import { CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';
import oficinaImg from '../assets/Oficina.jpeg';

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
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center', maxWidth: '1000px', width: '100%' }}>
              <div style={{ flex: '1 1 400px', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Inaugurada em <strong>27 de novembro de 2017</strong>, a <strong>{companyData.name}</strong> nasceu com o objetivo de oferecer uma alternativa econômica e sustentável para os motoristas, sem abrir mão da performance e segurança. Somos especialistas na instalação e manutenção de sistemas GNV das gerações mais modernas.
                </p>
                <p>
                  Com anos de experiência de mercado, nossa oficina é equipada com scanners de injeção eletrônica de última geração e ferramentas específicas para testes de estanqueidade e regulagem fina, garantindo que o seu veículo funcione de forma impecável tanto no gás quanto no combustível líquido.
                </p>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <img src={oficinaImg} alt="Interior da Oficina Carioca do Gás" style={{ width: '100%', maxWidth: '400px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
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
