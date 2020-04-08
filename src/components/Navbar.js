import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { Location } from '@reach/router'
import './Navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [ensemblesActive, setEnsemblesActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__hamburger-menu">
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => setOpen(!open)}
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
          <div className={`slider ${open && 'open'}`}>
            <Link to="/">
              <h2 className={`link ${pathname === '/' && 'active'}`}>Home</h2>
            </Link>
            <div>
              <button onClick={() => setEnsemblesActive(!ensemblesActive)}>
                <h2 className={`link ${pathname.includes('ensembles') && 'active'}`}>Ensembles</h2>
              </button>
              <div className={`ensembles ${ensemblesActive && 'active'}`}>
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
                  render={({ markdownRemark: { frontmatter: { ensembles }}}) => ensembles && ensembles.map(({ button: { buttonLink }, heading }) => (
                    <Link to={buttonLink}>
                      <h3 className={`ensemble`}>{heading}</h3>
                    </Link>
                  ))}
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