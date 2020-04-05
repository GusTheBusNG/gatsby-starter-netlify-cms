import React from 'react';
import CardTitle from '../CardTitle';
import Button from '../Button';
import Image from '../Image';

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
    <CardTitle subtitle={date} title={title} />

    <Image
      alt={title}
      className="expanded-card__image"
      image={image}
    />

    <p className="expanded-card__description">{description}</p>
    {
      !showLocation ? (
        <>
          <CardTitle subtitle={subtitle} />
          <p className="expanded-card__description">{secondDescription}</p>
          <div className="expanded-card__button">
            <Button link={buttonLink}>{buttonText}</Button>
          </div>
        </>
      ) : (
        <div className="expanded-card__button">
          <Button link={buttonLink}>{buttonText}</Button>
        </div>
      )
    }
  </div>
)

export default ExpandedCard;