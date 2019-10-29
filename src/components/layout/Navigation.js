import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(){
    return (
        <div className="section navigation-section">
            <NavLink to='/home' className='nav-link' activeClassName='nav-link-active'>home</NavLink>{linkSeparator}
            <NavLink to="/code-examples" className="nav-link" activeClassName="nav-link-active">Code Examples</NavLink>{linkSeparator}
            <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">contact</NavLink>
        </div>
    );
}

const linkSeparator = ' | ';
export default Navigation;