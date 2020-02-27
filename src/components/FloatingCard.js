import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './FloatingCard.scss'

const FloatingCard = ({ image, header, content, drawer, children, className }) => {
  const [collapsed, setCollapsed] = useState(1)
  
  return (
  <div className={`floating-card ${className}`}>
    { !!image &&
      <img
        alt="icon"
        className="floating-card__image"
        src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
    }
    <h3 className="floating-card__heading">{header}</h3>
    <p className="floating-card__content">{content}</p>
    { !!drawer &&
      <>
        <button onClick={() => setCollapsed(!collapsed)} className="floating-card__expand"></button>
        <p className={`floating-card__drawer  ${collapsed ? 'collapsed' : 'expanded'}`}>{drawer}</p>
      </>
    }
    { !!children &&
      <div className="floating-card__children">
        {children}
      </div>
    } 
  </div>
)};

FloatingCard.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default FloatingCard;
