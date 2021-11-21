import {Link} from "react-router-dom"
import React from "react";

const Header = (props) => {
    return (
        <nav className="nav">
            
            {/* <Link  to="/">
                <div>UN-WASTED APP</div>
            </Link> */}
            <Link to="/signup"><h2>Sign Up</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
        </nav>
    )
}

export default Header;
 