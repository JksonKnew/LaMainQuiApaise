import React from "react";
import { Link, useLocation } from "react-router-dom";
import './nav.scss';

function NavBar() {
    const location = useLocation();

    // Fonction pour déterminer si le chemin correspond à l'URL actuelle
    const isActiveLink = (path) => {
        // Comparer le chemin avec l'URL actuelle
        return location.pathname === path;
    };

    return (
        <React.Fragment>
            <div className="navbarContainer">
                <div className="logoContainer">./</div>
                <div className="navLinkContainer">
                    <Link to="/" className={isActiveLink("/") ? "navActive" : ""}>Home</Link>
                    <Link to="/about" className={isActiveLink("/about") ? "navActive" : ""}>About</Link>
                    <Link to="/oizad" className={isActiveLink("/oizad") ? "navActive" : ""}>Error</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;
