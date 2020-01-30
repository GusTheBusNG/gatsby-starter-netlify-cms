import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import './cu-singers-page.scss';

export const CUSingersPageTemplate = ({
  image,
  header,
  subheading,
  about,
  buttonText,
  subheadingTwo,
  auditionText
}) => {
  console.log(image, header, subheading, about, buttonText, subheadingTwo, auditionText);
  return (
    <div>
      <h1>{header.topText}</h1>
      <h2>{header.bottomText}</h2>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      ></div>
      <h3>{subheading}</h3>
      <p>{about}</p>
      <button>{buttonText}</button>
      <h3>{subheadingTwo}</h3>
      <p>Where: {auditionText.where}</p>
      <p>When: {auditionText.when}</p>
      <p>What: {auditionText.what}</p>
    </div>
  );
}

CUSingersPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  buttonText: PropTypes.string,
  subheadingTwo: PropTypes.string,
  auditionText: PropTypes.object,
}

const CUSingersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <CUSingersPageTemplate
      image={frontmatter.image}
      header={frontmatter.header}
      subheading={frontmatter.subheading}
      about={frontmatter.about}
      buttonText={frontmatter.buttonText}
      subheadingTwo={frontmatter.subheadingTwo}
      auditionText={frontmatter.auditionText}
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
        buttonText
        subheadingTwo
        auditionText {
          when
          where
          what
        }
      }
    }
  }
`
