import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-header section-header-${align} ${className}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionHeader;
