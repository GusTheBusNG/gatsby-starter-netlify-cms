import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Button from '../components/Button'
import Subheading from '../components/Subheading'
import FloatingCard from '../components/FloatingCard'
import HorizontalCard from '../components/HorizontalCard'
import TextContent from '../components/TextContent'
import Layout from '../components/Layout'

import './major-page.scss'

export const MajorPageTemplate = ({
  majorHeading: { topText, bottomText },
  subheading,
  button,
  subheadingTwo,
  majorAuditionInfo,
  subheadingThree,
  stories,
  html
}) => (
  <div className="major">
    <div className="major__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={html}></TextContent>
      <Button data={button} />
      <Subheading>{subheadingTwo}</Subheading>

      <div className="major__content__auditions">
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
      </div>
    </div>
    <div className="major__stories">
      <Subheading className="major__stories__heading">{subheadingThree}</Subheading>
      {
        stories && stories.map(info => (<HorizontalCard key={info.title} info={info} /> ))
      }
    </div>
  </div>
);

MajorPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  majorHeading: PropTypes.object,
  subheading: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  majorAuditionInfo: PropTypes.array,
  subheadingThree: PropTypes.string,
  stories: PropTypes.array
}

const MajorPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <MajorPageTemplate
        majorHeading={frontmatter.majorHeading}
        subheading={frontmatter.subheading}
        button={frontmatter.button}
        subheadingTwo={frontmatter.subheadingTwo}
        majorAuditionInfo={frontmatter.majorAuditionInfo}
        subheadingThree={frontmatter.subheadingThree}
        stories={frontmatter.stories}
        html={html}
      />
    </Layout>
  )
}

MajorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MajorPage

export const pageQuery = graphql`
  query MajorPage {
    markdownRemark(frontmatter: { templateKey: { eq: "major-page" } }) {
      html
      frontmatter {
        majorHeading {
          topText
          bottomText
        }
        subheading
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
        stories {
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
          secondDescription {
            subtitle
            description
          }
        }
      }
    }
  }
`