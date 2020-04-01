import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HorizontalCard from '../components/HorizontalCard';

import './concerts-page.scss'
import Navbar from '../components/Navbar';

export const ConcertsPageTemplate = ({
  heading: {
    topText,
    bottomText
  },
  concerts
}) => (
  <>
    <Navbar active='concerts' />
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
    </div>
    <Footer />
  </>
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
