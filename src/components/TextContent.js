import React from 'react'
import PropTypes from 'prop-types'

import './TextContent.scss';
import Subheading from './Subheading';

export const TextContent = ({
  header,
  content
}) => (
  <div className="text-content">
    <Subheading>{header}</Subheading>
    <p className="text-content__content">{content}</p>
  </div>
);

TextContent.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
}

export default TextContent;
