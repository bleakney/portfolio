import React from 'react';
import { Link } from 'react-router-dom';

function Nav (props) {
    const {
        aboutSelected,
        setAboutSelected,
        workSelected,
        setWorkSelected
    } = props;
    
    return (
        <header>
            <nav>
               <Link to="/portfolio" onClick={() => {setWorkSelected(false); setAboutSelected(false);}}> <h1>Bleakney Bissett</h1> </Link>
                <div className="navlinks-container">
                   <Link to="/portfolio/work"> <span className={`nav-link navlink-margin ${workSelected && `navlink-active`}`} onClick={() => {setWorkSelected(true); setAboutSelected(false);}} >WORK</span> </Link>
                   <span className="navlink-margin"> / </span>
                   <Link to="/portfolio/about"> <span className={`nav-link navlink-margin ${aboutSelected && `navlink-active`}`} onClick={() => {setAboutSelected(true); setWorkSelected(false);}} >ABOUT</span> </Link>
                    {/* <Link to="/portfolio/contact"> <span className="nav-link">CONTACT</span> </Link> */}
                </div>
            </nav>
        </header>
    )
};

export default Nav;