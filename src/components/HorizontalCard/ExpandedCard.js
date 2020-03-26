import React from 'react';
import CardTitle from '../CardTitle';
import Button from '../Button';

import './ExpandedCard.scss';

const ExpandedCard = ({
  photo: image,
  title,
  date,
  description,
  button: {
    buttonLink,
    buttonText
  },
  showLocation,
  secondDescription: {
    subtitle,
    description: secondDescription
  }
}) => (
  <div className="expanded-card">
    <img
      alt={title}
      className="expanded-card__image"
      src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    { 
      !showLocation && (
        <div className="expanded-card__description">
          <CardTitle subtitle={date} title={title} />
          <p className="expanded-card__description__text">{description}</p>
          
          <CardTitle subtitle={subtitle} />
          <p className="expanded-card__description__text">{secondDescription}</p>
            
          <div className="expanded-card__description__button">
            <Button link={buttonLink}>{buttonText}</Button>
          </div>
        </div>
      )
    }
  </div>
)

export default ExpandedCard;