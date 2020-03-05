import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import Concert from '../components/Concert';

import './concerts-page.scss'

export const ConcertsPageTemplate = ({
  heading: {
    topText,
    bottomText
  },
  concerts
}) => (
  <div className="concerts-page">
    <Header
      topText={topText}
      bottomText={bottomText}
    />
    {
      concerts && concerts.map(concert => (<Concert key={concert.title} concert={concert} /> ))
    }
  </div>
);

ConcertsPageTemplate.propTypes = {
  heading: PropTypes.object,
  concerts: PropTypes.array
}

const ConcertsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ConcertsPageTemplate
      heading={frontmatter.concertsPageHeading}
      concerts={frontmatter.concerts}
    />
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
          location {
            features {
              geometry {
                coordinates
              }
            }
          }
        }
      }
    }
  }
`
