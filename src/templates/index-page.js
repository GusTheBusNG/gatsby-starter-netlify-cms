import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import FloatingCard from '../components/FloatingCard'
import SocialMediaLine from '../components/SocialMediaLine'
import Header from '../components/Header';
import Image from '../components/Image';
import FloatingCardWithBigPicture from '../components/FloatingCardWithBigPicture'

import './index-page.scss'
import Navbar from '../components/Navbar'

export const IndexPageTemplate = ({
  logo,
  missionStatement: {
    heading: missionStatementHeading,
    content: missionStatementContent
  },
  backgroundImage,
  socialMedia,
  heading: {
    topText,
    bottomText
  },
  ensembles
}) => (
  <div className="home-page">
    <Navbar active='home' />
    <div 
      className="landing-content"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent 60%),
        url(${
          !!backgroundImage.childImageSharp ?
            backgroundImage.childImageSharp.fluid.src :
            backgroundImage
        })`,
      }}
    >
      <Image
        alt={topText}
        className="landing-content__logo"
        image={logo}
      />

      <FloatingCard
        className="landing-content__mission-statement"
        header={missionStatementHeading}
        content={missionStatementContent}
      />

      <SocialMediaLine
        className="landing-content__social-media"
        socialMedia={socialMedia}
      />
    </div>

    <div className="ensembles-list">
      <Header
        topText={topText}
        bottomText={bottomText}
      />
      {
        ensembles && ensembles.map(({
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
);

IndexPageTemplate.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  missionStatement: PropTypes.object,
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  socialMedia: PropTypes.array,
  heading: PropTypes.object,
  ensembles: PropTypes.array
}

IndexPageTemplate.defaultProps = {
  missionStatement: {
    heading: 'Mission Statement Heading',
    content: 'Mission statement content'
  },
  heading: {
    topText: 'Top heading text',
    bottomText: 'bottom heading text'
  },
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      logo={frontmatter.logo}
      missionStatement={frontmatter.missionStatement}
      backgroundImage={frontmatter.backgroundImage}
      socialMedia={frontmatter.socialMedia}
      heading={frontmatter.homePageHeading}
      ensembles={frontmatter.ensembles}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        logo {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        missionStatement {
          heading
          content
        }
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
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
        homePageHeading {
          topText
          bottomText
        }
        ensembles {
          button {
            buttonLink
            buttonText
          }
          description
          heading
          image {
            publicURL
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
