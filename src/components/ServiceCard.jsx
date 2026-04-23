import React from 'react';
import { Wrench, ShieldAlert, Droplet, Cpu, Settings, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const iconMap = {
  Wrench: <Wrench size={32} />,
  ShieldAlert: <ShieldAlert size={32} />,
  Droplet: <Droplet size={32} />,
  Cpu: <Cpu size={32} />,
  Settings: <Settings size={32} />,
  Car: <Car size={32} />
};

const ServiceCard = ({ service }) => {
  const CardContent = (
    <>
      <div className="service-icon-wrapper">
        {iconMap[service.icon] || <Settings size={32} />}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      {service.link && <span className="service-link-hint">Ver Galeria →</span>}
    </>
  );

  if (service.link) {
    return (
      <Link to={service.link} className="service-card service-card-link surface-glass">
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="service-card surface-glass">
      {CardContent}
    </div>
  );
};

export default ServiceCard;
