import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'

function NavBar() {
    return (
        <React.Fragment>
            <div className="navbarContainer">
                <div className="logoContainer">./</div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/oizad">Error</Link>
                </div>

            </div>
        </React.Fragment>
    )
}

export default NavBar