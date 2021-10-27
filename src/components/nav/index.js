import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    
    return (
        <header>
            <nav>
               <Link to="/"> <h1>Bleakney Bissett</h1> </Link>
                <div className="navlinks-container">
                   <Link to="/work"> <span className="nav-link navlink-margin">WORK</span> </Link>
                   <Link to="/about"> <span className="nav-link navlink-margin">ABOUT</span> </Link>
                    <Link to="/contact"> <span className="nav-link">CONTACT</span> </Link>
                </div>
            </nav>
        </header>
    )
};

export default Nav;