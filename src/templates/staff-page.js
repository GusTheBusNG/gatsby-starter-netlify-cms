import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import FloatingCard from '../components/FloatingCard'

import './staff-page.scss'

export const StaffPageTemplate = ({
  staffHeading: {
    topText,
    bottomText
  },
  staffList
}) => (
  <div className="staff-page">
    <Header
      topText={topText}
      bottomText={bottomText}
    />
    <div class="staff-list">
      {
        staffList && staffList.map(({
          image,
          name,
          title,
          bio,
          email
        }) => (
          <FloatingCard
            header={name}
            content={title}
            drawer={bio}
            email={email}
            image={image}
          />
        ))
      }
    </div>
  </div>
);

StaffPageTemplate.propTypes = {
  staffHeading: PropTypes.object,
  staffList: PropTypes.array
}

StaffPageTemplate.defaultProps = {
  staffHeading: {
    topText: 'Top heading text',
    bottomText: 'bottom heading text'
  },
}

const StaffPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <StaffPageTemplate
      staffHeading={frontmatter.staffHeading}
      staffList={frontmatter.staffList}
    />
  )
}

StaffPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StaffPage

export const pageQuery = graphql`
  query StaffPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "staff-page" } }) {
      frontmatter {
        staffHeading {
          topText
          bottomText
        }
        staffList {
          name
          title
          email
          bio
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`