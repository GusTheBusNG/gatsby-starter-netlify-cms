import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Subheading from '../components/Subheading'
import HorizontalCard from '../components/HorizontalCard'
import VideoCard from '../components/VideoCard'
import SocialMediaLine from '../components/SocialMediaLine'
import Layout from '../components/Layout'

import './concerts-page.scss'

export const ConcertsPageTemplate = ({
  heading: {
    topText,
    bottomText
  },
  subheading,
  previewConcerts,
  socialMedia,
  subheadingTwo,
  concerts
}) => (
  <div className="concerts-page">
    <div className="concerts-page__content">
      <Header
        topText={topText}
        bottomText={bottomText}
      />
      <Subheading className="concerts-page__subheading-1">{subheading}</Subheading>
      { previewConcerts && (
        <div className="concerts-page__preview">
          {
            previewConcerts.map(info => (<VideoCard key={info.title} {...info}/> ))
          }
        </div>
      ) }
      <SocialMediaLine
        className="concerts-page__social-media"
        socialMedia={socialMedia}
      />
      <Subheading className="concerts-page__subheading-2">{subheadingTwo}</Subheading>
      <div className="concerts-page__upcoming">
        {
          concerts && concerts.map(info => (<HorizontalCard key={info.title} info={info} /> ))
        }
      </div>
    </div>
    
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
  subheading: PropTypes.string,
  previewConcerts: PropTypes.array,
  socialMedia: PropTypes.array,
  subheadingTwo: PropTypes.string,
  concerts: PropTypes.array
}

const ConcertsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ConcertsPageTemplate
        heading={frontmatter.concertsPageHeading}
        subheading={frontmatter.subheading}
        previewConcerts={frontmatter.previewConcerts}
        socialMedia={frontmatter.socialMedia}
        subheadingTwo={frontmatter.subheadingTwo}
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
        subheading
        previewConcerts {
          header
          content
          videoLink
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
        subheadingTwo
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
