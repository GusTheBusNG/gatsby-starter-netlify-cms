import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import FloatingCard from '../components/FloatingCard'
import Layout from '../components/Layout'

import './staff-page.scss'

export class StaffPageTemplate extends Component {
  constructor(props) {
    super(props);
    const { staffList } = this.props;

    this.state = {
      staffList: [staffList]
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate({ staffList: nextStaffList }) {
    if (nextStaffList !== this.props.staffList) {
      this.setState(({ staffList }) => {
        if (staffList.length === 1) {
          return { staffList: [nextStaffList]}
        } else {
          let newStaffList = [[], []];

          nextStaffList.map((staff, index) =>
            index % 2 === 0 ? newStaffList[0].push(staff) : newStaffList[1].push(staff));

          return { staffList: newStaffList };
        }
      });
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions() {
    const screenWidth = window.innerWidth;

    // 992 pixels from variables.scss
    if (screenWidth > 992 && this.state.staffList.length === 1) {
      this.setState(({ staffList }) => {
        let newStaffList = [[], []];

        staffList[0].map((staff, index) =>
          index % 2 === 0 ? newStaffList[0].push(staff) : newStaffList[1].push(staff));

        return { staffList: newStaffList };
      })
    } else if (screenWidth <= 992 && this.state.staffList.length === 2) {
      this.setState(({ staffList }) => {
        let newStaffList = [[]];

        staffList[0].map((staff, index) => {
          newStaffList[0].push(staff);
          return staffList[1][index] && newStaffList[0].push(staffList[1][index]);
        });

        return { staffList: newStaffList };
      })
    }
  }

  render() {
    const { staffList } = this.state;
    const {
      staffHeading: {
        topText,
        bottomText
      },
    } = this.props;

    return (
      <div className="staff-page">
        <Header
          topText={topText}
          bottomText={bottomText}
        />
        <div className="staff-page__parent-list">
          {
            staffList && staffList.map(innerList => (
              <div className="staff-list" key={innerList[0].name}>
                {
                  innerList && innerList.map(({
                    image,
                    name,
                    title,
                    bio,
                    email
                  }) => (
                    <FloatingCard
                      key={name}
                      header={name}
                      content={title}
                      drawer={bio}
                      email={email}
                      image={image}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

StaffPageTemplate.propTypes = {
  staffHeading: PropTypes.object,
  staffList: PropTypes.array
}

StaffPageTemplate.defaultProps = {
  staffHeading: {
    topText: 'Top heading text',
    bottomText: 'bottom heading text'
  },
}

const StaffPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <StaffPageTemplate
        staffHeading={frontmatter.staffHeading}
        staffList={frontmatter.staffList}
      />
    </Layout>
  )
}

StaffPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StaffPage

export const pageQuery = graphql`
  query StaffPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        staffHeading {
          topText
          bottomText
        }
        staffList {
          name
          title
          email
          bio
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