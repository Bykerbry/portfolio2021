import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import favicon from '../../static/b-icon.ico'
import '../styles/index.scss'
import '../styles/base.scss'

const Layout = ({children}) => {
    return (
        <div>
            <Helmet 
                title='Bryce Byker'
                meta={[
                    {
                      name: "description",
                      content: "Bryce Byker is a Front-End Software Developer and this is his portfolio.",
                    },
                    {
                      name: "keywords",
                      content: "Bryce Byker, Front-End Developer, Software",
                    },
                  ]}
            >
              <link rel="icon" href={favicon}/>
              <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
