import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';
import { companyData } from '../data/companyData';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Fale <span className="text-gradient">Conosco</span></h1>
            <p className="section-desc">Estamos prontos para atender você. Entre em contato ou venha nos visitar.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Info */}
            <div className="surface-glass" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Informações de Contato</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone color="var(--color-primary)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Telefone / WhatsApp</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>{companyData.phone}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail color="var(--color-primary)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Email</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>{companyData.email}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin color="var(--color-primary)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Endereço</strong>
                    <span style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>{companyData.address}</span>
                    <a href={companyData.mapUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                      📍 Traçar Rota via GPS
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock color="var(--color-primary)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Horário de Funcionamento</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>{companyData.workingHours}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Button href={`https://wa.me/${companyData.whatsapp}`} variant="primary" style={{ width: '100%' }}>
                  Enviar Mensagem Rápida
                </Button>
              </div>
            </div>

            {/* Form Placeholder */}
            <div className="surface-glass" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Envie uma Mensagem</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nome Completo</label>
                  <input type="text" placeholder="Seu nome" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'white', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Telefone / Celular</label>
                  <input type="text" placeholder="(DD) 90000-0000" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'white', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mensagem</label>
                  <textarea rows="4" placeholder="Como podemos ajudar?" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'white', fontSize: '1rem', resize: 'vertical' }}></textarea>
                </div>
                <Button variant="primary" type="submit">Enviar Solicitação</Button>
              </form>
            </div>

          </div>

          {/* Embedded Map Section */}
          <div style={{ marginTop: '4rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-border)', height: '400px' }}>
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
