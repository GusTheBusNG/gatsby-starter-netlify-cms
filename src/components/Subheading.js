import React from 'react'

import './Subheading.scss';

export const Subheading = ({ children, className }) => (
  <h3 className={`subheading ${className}`}>
    {children}
  </h3>
);

export default Subheading;
