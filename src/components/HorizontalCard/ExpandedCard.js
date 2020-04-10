import React from 'react';
import CardTitle from '../CardTitle';
import Button from '../Button';
import Image from '../Image';
import Map from '../Map';

import './ExpandedCard.scss';

const ExpandedCard = ({
  photo: image,
  title,
  date,
  description,
  button,
  showLocation,
  map,
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

    {!!description && 
      <p className="expanded-card__description">{description}</p>
    }
    {
      !showLocation ? (
        <>
          <CardTitle className="expanded-card__subtitle" subtitle={subtitle} />
          {!!secondDescription &&
            <p className="expanded-card__description">{secondDescription}</p>
          }
          <div className="expanded-card__button">
            <Button data={button} />
          </div>
        </>
      ) : (
        <>
          <div className="expanded-card__button">
            <Button data={button} />
          </div>

          <div className="expanded-card__map-wrapper">
            <Map map={map} />
          </div>
        </>
      )
    }
  </div>
);

export default ExpandedCard;