import React from 'react';
import PropTypes from 'prop-types'

import './AudioCard.scss'

const AudioCard = ({ audioLink, header, content, className }) => {
  return (
  <div className={`audio-card-container ${className}`}>
    <div className="audio-card">
      <h3 className="audio-card__heading">{header}</h3>
      <p className="audio-card__content">{content}</p>
      <audio controls src={audioLink} className="audio-card__audio">
        <track kind="captions" />
        Your browser does not support HTML5 audio.
      </audio>
    </div>
  </div>
)};

AudioCard.propTypes = {
  audioLink: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default AudioCard;
