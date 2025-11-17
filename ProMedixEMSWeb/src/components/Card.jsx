import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = ''
}) => {
  const classNames = [
    'card',
    `card-${variant}`,
    hover ? 'card-hover' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Card;
