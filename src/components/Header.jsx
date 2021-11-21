import { Link } from "react-router-dom"
import React, { useContext } from "react";
import { GlobalCtx } from '../App';


const Header = (props) => {

    const {gState, setGState} = useContext(GlobalCtx)

    const logout = (
        <Link>
        <h2 onClick={()=>{
            window.localStorage.removeItem("token")
            setGState({ ...gState, token:null })
        }}>Logout</h2>
        </Link>
    );

    return (
        <nav className="nav">
            <Link to="/signup"><h2>Sign Up</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
            {gState.token ? logout : null}
        </nav>
    );
};

export default Header;
 