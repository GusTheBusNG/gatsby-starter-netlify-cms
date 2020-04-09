import React from 'react';
import PropTypes from 'prop-types'

import './VideoCard.scss'

const VideoCard = ({ videoLink, header, content, className }) => {
  return (
  <div className={`card-container ${className}`}>
    <div className="video-card">
      <iframe 
        className="video-card__video"
        title="Preview Concert Video"
        width="560" 
        height="315"
        src={`${videoLink}`} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <h3 className="video-card__heading">{header}</h3>
      <p className="video-card__content">{content}</p>
    </div>
  </div>
)};

VideoCard.propTypes = {
  videoLink: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default VideoCard;
