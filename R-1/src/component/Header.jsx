import React from 'react'
import '../App.css'
const Header = () => {
    return (
        <nav id='nav'>
            <ul id='nav-list'>
                <a id='a' href="/">Home</a>
                <a id='a' href="/News">News</a>
                <a id='a' href="/Contact">Contact</a>
                <a id='a' href="/About">About</a>
                <a href="/cardDetails"></a>
            </ul>
        </nav>
    )
}

export default Header