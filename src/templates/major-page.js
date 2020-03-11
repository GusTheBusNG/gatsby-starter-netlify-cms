import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Subheading from '../components/Subheading';
import FloatingCard from '../components/FloatingCard'

import './major-page.scss'

export const MajorPageTemplate = ({
  majorHeading: { topText, bottomText },
  subheading,
  about,
  button: { buttonText, buttonLink },
  subheadingTwo,
  majorAuditionInfo,
  subheadingThree
}) => (
  <div className="major-page">
    <Header topText={topText} bottomText={bottomText} />
    <TextContent header={subheading} content={about} />
    <Button link={buttonLink}>
      {buttonText}
    </Button>
    <Subheading>{subheadingTwo}</Subheading>

    {
      majorAuditionInfo ?
        majorAuditionInfo.map(({ image, heading, text }) => (
          <FloatingCard
            image={image}
            header={heading}
            content={text}
          />
        )) : null
    }

    <Subheading>{subheadingThree}</Subheading>
  </div>
);

MajorPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
  subheadingThree: PropTypes.string,
}

MajorPageTemplate.defaultProps = {
  majorHeading: {
    topText: 'Top heading text',
    bottomText: 'bottom heading text'
  },
}

const MajorPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <MajorPageTemplate
      header={frontmatter.header}
      subheading={frontmatter.subheading}
      about={frontmatter.about}
      button={frontmatter.button}
      subheadingTwo={frontmatter.subheadingTwo}
      majorAuditionInfo={frontmatter.majorAuditionInfo}
      subheadingThree={frontmatter.subheadingThree}
    />
  )
}

MajorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MajorPage

export const pageQuery = graphql`
  query MajorPage {
    markdownRemark(frontmatter: { templateKey: { eq: "major-page" } }) {
      frontmatter {
        majorHeading {
          topText
          bottomText
        }
        subheading
        about
        button {
          buttonText
          buttonLink
        }
        subheadingTwo
        majorAuditionInfo {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          heading
        }
        subheadingThree
      }
    }
  }
`