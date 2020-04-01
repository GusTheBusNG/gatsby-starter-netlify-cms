import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import logo from '../img/vocal-arts-logo-full-color.svg'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
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

      <div style={{ paddingBottom: '9.75rem' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
