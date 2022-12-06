import React from 'react'
import Navigation from './Navigation'

const headerStyle = {
    background: "lightblue"
}

const Header = () => {
    return (
        <header>
            <h1 style={headerStyle}>Alice Shao</h1>
            <Navigation />
        </header>
    )
}

export default Header