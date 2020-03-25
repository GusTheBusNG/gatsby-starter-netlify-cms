import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import './Navbar.scss'

const Navbar = ({ active }) => {
  const [open, setOpen] = useState(false)

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

      <div className={`slider ${open && 'open'}`}>
        <Link to="/">
          <h2 className={`link ${active === 'home' && 'active'}`}>
            <span role="img" aria-label="Home">🏡</span> Home
          </h2>
        </Link>
        <Link to="/concerts">
          <h2 className={`link ${active === 'concerts' && 'active'}`}>
            <span role="img" aria-label="Concerts">🎵</span> Concerts
          </h2>
        </Link>
        <Link to="/major">
          <h2 className={`link ${active === 'graduate' && 'active'}`}>
            <span role="img" aria-label="Graduate">🎓</span> Major
          </h2>
        </Link>
        <Link to="/staff">
          <h2 className={`link ${active === 'staff' && 'active'}`}>
            <span role="img" aria-label="Staff">👨‍🏫</span> Staff
          </h2>
        </Link>
        <Link to="/outreach">
          <h2 className={`link ${active === 'outreach' && 'active'}`}>
            <span role="img" aria-label="Outreach">🤝</span> Outreach Programs
          </h2>
        </Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  active: 'home'
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