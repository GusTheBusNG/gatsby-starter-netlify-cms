import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { Location } from '@reach/router'
import './Navbar.scss'

const activeFromPx = 20;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      ensemblesActive: false,
      scrolling: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { top } = document.body.getBoundingClientRect();
    (top * -1 > activeFromPx) ? this.setState({ scrolling: true }) : this.setState({ scrolling: false });
  }

  render() {
    return (
      <nav className="navbar">
        <div className={`navbar__hamburger-menu ${this.state.scrolling && 'scrolling'}`}>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={() => this.setState({ open: !this.state.open })}
            width={32}
            height={20}
            strokeWidth={2}
            color='#F66733'
            borderRadius={20}
            animationDuration={0.5}
          />
        </div>
        <Location>
          {({ location: { pathname } }) => (
            <div className={`slider ${this.state.open && 'open'}`}>
              <Link to="/">
                <h2 className={`link ${pathname === '/' && 'active'}`}>Home</h2>
              </Link>
              <div>
                <button onClick={() => this.setState({ ensemblesActive: !this.state.ensemblesActive })}>
                  <h2 className={`link ${pathname.includes('ensembles') && 'active'}`}>Ensembles</h2>
                </button>
                <div className={`ensembles ${this.state.ensemblesActive && 'active'}`}>
                  <StaticQuery
                    query={graphql`
                      query Navbar {
                        markdownRemark {
                          frontmatter {
                            ensembles {
                              button {
                                buttonLink
                              }
                              heading
                            }
                          }
                        }
                      }
                    `}
                    render={({ markdownRemark: { frontmatter: { ensembles }}}) => ensembles && ensembles.map(({ button: { buttonLink, newTab }, heading }) => {
                      const tag = <h3 className={`ensemble`}>{heading}</h3>
  
                      if (newTab) {
                        return (
                          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                            {tag}
                          </a>
                        );
                      } else {
                        return (
                          <Link to={buttonLink}>
                            {tag}  
                          </Link>
                        );
                      }
                    })}
                  />
                </div>
              </div>
              <Link to="/concerts">
                <h2 className={`link ${pathname.includes('concerts') && 'active'}`}>Concerts</h2>
              </Link>
              <Link to="/major">
                <h2 className={`link ${pathname.includes('major') && 'active'}`}>Major</h2>
              </Link>
              <Link to="/staff">
                <h2 className={`link ${pathname.includes('staff') && 'active'}`}>Staff</h2>
              </Link>
              <Link to="/outreach-programs">
                <h2 className={`link ${pathname.includes('outreach') && 'active'}`}>Outreach Programs</h2>
              </Link>
            </div>
          )}
        </Location>
      </nav>
    )
  }
}

Navbar.propTypes = {
  active: PropTypes.oneOf([
    'home',
    'concerts',
    'ensembles',
    'graduate',
    'staff',
    'outreach'
  ]).isRequired
}

export default Navbar