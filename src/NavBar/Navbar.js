import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <Link to="/"> <a className="navbar-brand" style={{ color: 'white' }}>Navbar</a> </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/search" ><a className="nav-link" style={{ color: "white" }} href="#">Search Students</a></Link>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
