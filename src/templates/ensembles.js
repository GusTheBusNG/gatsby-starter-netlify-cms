import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Subheading from '../components/Subheading';

import './ensembles.scss';
import FloatingCard from '../components/FloatingCard';
import { BackgroundImageDiv } from '../components/Image';
import Navbar from '../components/Navbar';

export const EnsemblesTemplate = ({
  image,
  header: { topText, bottomText },
  subheading,
  about,
  button: { buttonText, buttonLink },
  subheadingTwo,
  auditionInformation
}) => (
  <div className="ensembles">
    <Navbar active='ensembles' />
    <BackgroundImageDiv
      className="top-image"
      image={image}
    />

    <div className="ensembles__content">
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

EnsemblesTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
}

const Ensembles = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <EnsemblesTemplate
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

Ensembles.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Ensembles

export const pageQuery = graphql`
  query Ensembles {
    markdownRemark(frontmatter: { templateKey: { eq: "ensembles" } }) {
      frontmatter {
        header {
          topText
          bottomText
        }
        image {
          publicURL
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
            publicURL
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
