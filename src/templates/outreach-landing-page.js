import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';

import './outreach-landing-page.scss'
import FloatingCardWithBigPicture from '../components/FloatingCardWithBigPicture'

export const OutreachLandingPageTemplate = ({
  heading: {
    topText,
    bottomText
  },
  programs
}) => (
  <div className="outreach-landing-page">
    <div className="outreach-landing-page__content">
      <div className="programs-list">
        <Header
          topText={topText}
          bottomText={bottomText}
        />
        {
          programs && programs.map(({
            button,
            description,
            heading,
            image
          }) => (
            <FloatingCardWithBigPicture
              button={button}
              description={description}
              heading={heading}
              image={image}
              key={heading}
            />
          ))
        }
      </div>
    </div>
  </div>
);

OutreachLandingPageTemplate.propTypes = {
  heading: PropTypes.object,
  programs: PropTypes.array
}

OutreachLandingPageTemplate.defaultProps = {
  heading: {
    topText: 'Top heading text',
    bottomText: 'bottom heading text'
  },
}

const OutreachLandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <OutreachLandingPageTemplate
      heading={frontmatter.outreachProgramsLandingHeading}
      programs={frontmatter.programs}
    />
  )
}

OutreachLandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default OutreachLandingPage

export const pageQuery = graphql`
query OutreachLandingPageTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "outreach-landing-page" } }) {
    frontmatter {
      outreachProgramsLandingHeading {
        topText
        bottomText
      }
      programs {
        button {
          buttonLink
          buttonText
        }
        description
        heading
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