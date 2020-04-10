import React from 'react'
import PropTypes from 'prop-types'
import { MajorPageTemplate } from '../../templates/major-page'

const MajorPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    majorHeading,
    subheading,
    button,
    subheadingTwo,
    majorAuditionInfo,
    subheadingThree,
    stories,
    html
  } = data;
 
  if (data) {
    return (
      <MajorPageTemplate
        majorHeading={majorHeading}
        subheading={subheading}
        button={button}
        subheadingTwo={subheadingTwo}
        majorAuditionInfo={majorAuditionInfo}
        subheadingThree={subheadingThree}
        stories={stories}
        html={html}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MajorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MajorPagePreview
