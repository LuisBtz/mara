import * as React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Typography } from '../styles/Typography'
import { Normalizer } from '../styles/Normalizer'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children }) => {
  return (
    <>
        <Normalizer />
        <Typography />
        <GlobalStyles />
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout