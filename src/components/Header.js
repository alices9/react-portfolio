import React from 'react'
import Navigation from './Navigation'

const headerStyle = {
    background: "lightblue"
}

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Alice Shao</h1>
            <Navigation />
        </header>
    )
}

export default Header