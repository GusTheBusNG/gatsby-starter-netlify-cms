import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import logo from '../../static/img/vocal-arts-logo-full-color.svg'
import Navbar from './Navbar'

import './Layout.scss'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="the-whole-dang-thing">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/svg"
          href={logo}
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
