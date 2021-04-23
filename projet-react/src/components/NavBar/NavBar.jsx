import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar--container">
            <nav className="NavBar--nav">
                <ul className="NavBar--nav--list">
                    <li className="NavBar--nav-item">
                        <NavLink to="/App" className="NavBar-link" exact activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="NavBar--nav-item">
                        <NavLink className="NavBar-link" to="/autre" exact activeClassName="active">
                            Autres jeux
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;