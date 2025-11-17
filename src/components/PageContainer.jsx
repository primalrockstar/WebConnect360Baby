import React from 'react';
import './PageContainer.css';

const PageContainer = ({ 
  children, 
  className = '',
  maxWidth = 'large'
}) => {
  return (
    <div className={`page-container page-container-${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
