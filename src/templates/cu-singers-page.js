import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Subheading from '../components/Subheading';

import './cu-singers-page.scss';
import FloatingCard from '../components/FloatingCard';

export const CUSingersPageTemplate = ({
  image,
  header: { topText, bottomText },
  subheading,
  about,
  button: { buttonText, buttonLink },
  subheadingTwo,
  auditionInformation
}) => (
  <div className="cu-singers">
    <div
      className="top-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    ></div>

    <div className="cu-singers__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={about} />
      <Button link={buttonLink}>
        {buttonText}
      </Button>
      <Subheading>{subheadingTwo}</Subheading>

      {
        auditionInformation ?
          auditionInformation.map(({ image, heading, text }) => (
            <FloatingCard
              image={image}
              header={heading}
              content={text}
            />
          )) : null
      }
    </div>
    
    <br></br>
  </div>
);

CUSingersPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
}

const CUSingersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <CUSingersPageTemplate
      image={frontmatter.image}
      header={frontmatter.header}
      subheading={frontmatter.subheading}
      about={frontmatter.about}
      button={frontmatter.button}
      subheadingTwo={frontmatter.subheadingTwo}
      auditionInformation={frontmatter.auditionInformation}
    />
  )
}

CUSingersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CUSingersPage

export const pageQuery = graphql`
  query CUSingersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "cu-singers-page" } }) {
      frontmatter {
        header {
          topText
          bottomText
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        about
        button {
          buttonText
          buttonLink
        }
        subheadingTwo
        auditionInformation {
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
      }
    }
  }
`
