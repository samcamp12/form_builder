import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
    return(
        <div className="navbar">
            <NavLink to="/home" className="nav-link" activeClassName="selected">Form Builder</NavLink>
            <NavLink to="/preview" className="nav-link" activeClassName="selected">Preview</NavLink>
        </div>
    )
}

export default Navigation;