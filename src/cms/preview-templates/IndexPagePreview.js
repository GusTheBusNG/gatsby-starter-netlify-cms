import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <IndexPageTemplate
        logo={data.logo}
        missionStatement={data.missionStatement}
        backgroundImage={data.backgroundImage}
        socialMedia={data.socialMedia}
        heading={data.homePageHeading}
        ensembles={data.ensembles}
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
