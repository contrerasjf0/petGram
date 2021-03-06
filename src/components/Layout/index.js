import React from 'react'
import { Helmet } from 'react-helmet'
import { Div } from './styles'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} /> }
      </Helmet>
      <Div>
        {children}
      </Div>
    </>
  )
}
