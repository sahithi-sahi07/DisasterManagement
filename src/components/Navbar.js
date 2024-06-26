import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Disaster Management</h1>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/report">Report Incident</a></li>
                <li><a href="/coordinate">Coordination</a></li>
                <li><a href="/predict">Prediction</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
