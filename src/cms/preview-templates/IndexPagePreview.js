import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    logo,
    missionStatement,
    backgroundImage,
    socialMedia,
    homePageHeading,
    ensembles,
    homeSubheading,
    files
  } = data;
 
  if (data) {
    return (
      <IndexPageTemplate
        logo={logo}
        missionStatement={missionStatement}
        backgroundImage={backgroundImage}
        socialMedia={socialMedia}
        heading={homePageHeading}
        ensembles={ensembles}
        subheading={homeSubheading}
        files={files}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
