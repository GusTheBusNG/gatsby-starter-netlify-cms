import React from 'react'
import PropTypes from 'prop-types'

import './SocialMediaLine.scss';
import Image from './Image';

export const SocialMediaLine = ({ socialMedia, className }) => socialMedia && (
  <div className={`social-media-line ${className}`}>
    {
      socialMedia.map(({ icon, link, newTab }) => (
        <a key={link} href={link} target={newTab && '_blank'} className="social-media-line__link">
          <Image
            alt="Social Media Icon"
            className="social-media-line__icon"
            image={icon}
          />
        </a>
      ))
    }
  </div>
);

SocialMediaLine.propTypes = {
  socialMedia: PropTypes.array.isRequired
}

export default SocialMediaLine;
