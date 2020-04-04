import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import HorizontalCard from '../components/HorizontalCard'
import SocialMediaLine from '../components/SocialMediaLine'
import Layout from '../components/Layout'

import './concerts-page.scss'

export const ConcertsPageTemplate = ({
  heading: {
    topText,
    bottomText
  },
  socialMedia,
  concerts
}) => (
  <div className="concerts-page">
    <div className="concerts-page__content">
      <Header
        topText={topText}
        bottomText={bottomText}
      />
      {
        concerts && concerts.map(concert => (<HorizontalCard key={concert.title} concert={concert} /> ))
      }
    </div>
    <SocialMediaLine
        className="concerts-page__social-media"
        socialMedia={socialMedia}
      />
  </div>
);

ConcertsPageTemplate.defaultProps = {
  heading: {
    topText: 'Clemson Vocal Arts',
    bottomText: 'Concerts'
  }
}

ConcertsPageTemplate.propTypes = {
  heading: PropTypes.object,
  socialMedia: PropTypes.array,
  concerts: PropTypes.array
}

const ConcertsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ConcertsPageTemplate
        heading={frontmatter.concertsPageHeading}
        socialMedia={frontmatter.socialMedia}
        concerts={frontmatter.concerts}
      />
    </Layout>
  )
}

ConcertsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ConcertsPage

export const pageQuery = graphql`
  query ConcertsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "concerts-page" } }) {
      frontmatter {
        concertsPageHeading {
          topText
          bottomText
        }
        socialMedia {
          icon {
            publicURL
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
        concerts {
          photo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          showTitle
          title
          date
          description
          button {
            buttonText
            buttonLink
          }
          location
          showLocation
          secondDescription {
            subtitle
            description
          }
        }
      }
    }
  }
`
