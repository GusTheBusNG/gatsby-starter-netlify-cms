import React from 'react'
import PropTypes from 'prop-types'
import { OutreachLandingPageTemplate } from '../../templates/outreach-landing-page'

const OutreachLandingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    outreachProgramsLandingHeading,
    programs
  } = data;
 
  if (data) {
    return (
      <OutreachLandingPageTemplate
        heading={outreachProgramsLandingHeading}
        programs={programs}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OutreachLandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OutreachLandingPagePreview
