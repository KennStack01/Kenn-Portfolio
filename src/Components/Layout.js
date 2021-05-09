import React from 'react'
import Header from './Header'
import NavMenu from './NavMenu'
import Footer from './Footer'

const styles = {
    layoutContent: 'text-center flex flex-col h-screen',
    children: 'flex-grow',
}

// Handling smooth-scroll in the page (from About Component)
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = (props) => {
    return (
        <div className={styles.layoutContent}>
            <Header />
            <main className={styles.children}>
                {props.children}
            </main>
            <NavMenu />
            <div className="m-auto invisible md:visible">
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
