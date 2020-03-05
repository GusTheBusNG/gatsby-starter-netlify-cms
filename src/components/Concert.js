import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import CardTitle from './CardTitle'

import './Concert.scss';

const Concert = ({
  concert: {
    photo: image,
    showTitle,
    title,
    date,
    description,
    button: {
      buttonLink,
      buttonText
    },
    location
  }
}) => (
  <div className="concert-parent">
    <div className="concert">
      <div className="concert__section" style={{ paddingBottom: showTitle ? '0.5rem' : '0'}}>
        <img
          alt={title}
          className={`concert__section__image ${!showTitle && 'full-image'}`}
          src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
        />
        {
          showTitle && (<CardTitle subtitle={date} title={title} />)
        }
      </div>
      <div className="concert__section description">
        <CardTitle subtitle={date} title={title} />
        <p className="concert__section__description">{description}</p>
        <div className="concert__section__button">
          <Button link={buttonLink}>{buttonText}</Button>
        </div>
      </div>
      <div className="concert__section description">
        <CardTitle subtitle={date} title={title} />
        <p className="concert__section__description">{description}</p>
      </div>
    </div>
  </div>
);

export default Concert;
