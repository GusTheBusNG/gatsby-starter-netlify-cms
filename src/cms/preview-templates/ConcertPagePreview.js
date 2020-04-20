import React from 'react'
import PropTypes from 'prop-types';
import { ConcertsPageTemplate } from '../../templates/concerts-page';

const ConcertPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (!data) return <div>Loading....</div>

  const {
    concertsPageHeading: heading,
    previewConcerts,
    subheading,
    concerts,
    socialMedia,
    subheadingTwo
  } = data;

  return (
    <ConcertsPageTemplate 
      heading={heading}
      subheading={subheading}
      previewConcerts={previewConcerts}
      concerts={concerts}
      subheadingTwo={subheadingTwo}
      socialMedia={socialMedia} 
    />
  );
}

ConcertPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,  
}

export default ConcertPagePreview;