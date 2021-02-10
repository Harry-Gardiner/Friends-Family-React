import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ml-5" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" activeClassName="active" className="nav-item nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addContacts" activeClassName="active" className="nav-item nav-link">Add Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;