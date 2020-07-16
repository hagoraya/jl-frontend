import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-dark">
                <Link to="/"> <a class="navbar-brand" style={{ color: 'white' }}>Navbar</a> </Link>
            </nav>
        </div>
    )
}

export default Navbar
