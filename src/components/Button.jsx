import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    // Se for um link externo
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return (
        <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
