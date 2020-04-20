import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import TextContent from '../components/TextContent'
import Subheading from '../components/Subheading'
import Layout from '../components/Layout'
import FloatingCard from '../components/FloatingCard';
import VideoCard from '../components/VideoCard'
import AudioCard from '../components/AudioCard'
import { BackgroundImageDiv } from '../components/Image';

import './ensembles.scss';

export const EnsemblesTemplate = ({
  image,
  header: { topText, bottomText },
  subheading,
  concertAttire,
  subheadingTwo,
  auditionInformation,
  subheadingThree,
  featuredRecordingAudio,
  featuredRecordingVideo,
  html
}) => (
  <div className="ensembles">
    <BackgroundImageDiv
      className="ensembles__top-image"
      image={image}
    />

    <div className="ensembles__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={html} />
      {concertAttire && <FloatingCard
        header={concertAttire.attireHeading}
        content={concertAttire.attireContent}
        drawer={concertAttire.attireDrawer}
        className="ensembles__concert-attire"
      />}
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
      <Subheading>{subheadingThree}</Subheading>
      {
        featuredRecordingAudio && <AudioCard {...featuredRecordingAudio} />
      }
      {
        featuredRecordingVideo && <VideoCard {...featuredRecordingVideo} />
      }
    </div>
  </div>
);

EnsemblesTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  concertAttire: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
  subheadingThree: PropTypes.string,
  featuredRecordingAudio: PropTypes.object,
  featuredRecordingVideo: PropTypes.object,
}

const Ensembles = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <EnsemblesTemplate
        image={frontmatter.image}
        header={frontmatter.header}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        concertAttire={frontmatter.concertAttire}
        subheadingTwo={frontmatter.subheadingTwo}
        auditionInformation={frontmatter.auditionInformation}
        subheadingThree={frontmatter.subheadingThree}
        featuredRecordingAudio={frontmatter.featuredRecordingAudio}
        featuredRecordingVideo={frontmatter.featuredRecordingVideo}
        html={html}
      />
    </Layout>
  )
}

Ensembles.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.object,
    }),
  }),
}

export default Ensembles

export const pageQuery = graphql`
  query Ensembles($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
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
        concertAttire {
          attireHeading
          attireContent
          attireDrawer
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
        subheadingThree
        featuredRecordingAudio {
          header
          content
          audioLink
        }
        featuredRecordingVideo {
          header
          content
          videoLink
        }
      }
    }
  }
`
