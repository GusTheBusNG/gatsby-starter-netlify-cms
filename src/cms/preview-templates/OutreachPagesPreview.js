import React from 'react'
import PropTypes from 'prop-types'
import { OutreachTemplate } from '../../templates/outreach'

const OutreachPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <OutreachTemplate
        image={data.image}
        header={data.header}
        subheading={data.subheading}
        button={data.button}
        subheadingTwo={data.subheadingTwo}
        auditionInformation={data.auditionInformation}
        subheadingThree={data.subheadingThree}
        buttonTwo={data.buttonTwo}
        staffList={data.staffList}
        html={widgetFor('body')}
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
