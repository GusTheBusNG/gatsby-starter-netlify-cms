import React from 'react'
import PropTypes from 'prop-types'
import { OutreachTemplate } from '../../templates/outreach'

const OutreachPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <OutreachTemplate
        image={data.image}
        header={data.header}
        subheading={data.subheading}
        about={data.about}
        button={data.button}
        subheadingTwo={data.subheadingTwo}
        auditionInformation={data.auditionInformation}
        subheadingThree={data.subheadingThree}
        buttonTwo={data.buttonTwo}
        staffList={data.staffList}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OutreachPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OutreachPreview
