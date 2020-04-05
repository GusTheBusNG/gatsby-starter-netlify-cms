import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height'
import PropTypes from 'prop-types'

import './FloatingCard.scss'
import Image from './Image';

const FloatingCard = ({ image, header, content, drawer, email, children, className }) => {
  const [height, setHeight] = useState(0)

  if (!header && !content) return <></>;
  
  return (
  <div className={`card-container ${className}`}>
    <div className="floating-card">
      { !!image &&
        <Image
          alt="icon"
          className="floating-card__image"
          image={image}
        />
      }
      <h3 className="floating-card__heading">{header}</h3>
      <p className="floating-card__content">{content}</p>
      { !!drawer &&
        <button 
          onClick={() => setHeight(height === 0 ? 'auto' : 0)} 
          className={`floating-card__expand ${height === 'auto' ? 'expanded' : 'collapsed'}`} />
      }
      { !!children &&
        <div className="floating-card__children">
          {children}
        </div>
      } 
    </div>
    { !!drawer &&
      <AnimateHeight 
        duration={200}
        height={height}
        className={`card-drawer  ${height === 'auto' ? 'expanded' : 'collapsed'}`}>
          <p className="card-drawer__text">{drawer}</p>
          <a className="card-drawer__link" href={`mailto: ${email}`}>{email}</a>
      </AnimateHeight>
    
    }
  </div>
)};

FloatingCard.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default FloatingCard;
