import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <Link to='/' className="brand-logo">Users app</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
