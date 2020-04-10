import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import HorizontalCard from '../components/HorizontalCard';
import Layout from '../components/Layout'

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
      concerts && concerts.map(info => (<HorizontalCard key={info.title} info={info} /> ))
    }
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
  concerts: PropTypes.array
}

const ConcertsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ConcertsPageTemplate
        heading={frontmatter.concertsPageHeading}
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
  query ConcertsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
            newTab
          }
          map {
            location
            title
            link
            newTab
          }
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
