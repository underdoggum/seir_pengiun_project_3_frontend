import { Link, useNavigate } from "react-router-dom"
import React, { useContext } from "react";
import { GlobalCtx } from '../App';


const Header = (props) => {
    const navigate = useNavigate()
    const {gState, setGState} = useContext(GlobalCtx)


    const logout = gState && gState.token ? (
        <h2 onClick={()=>{
            window.localStorage.removeItem("token")
            setGState({ ...gState, token:null })
            navigate("/")
        }}>Logout</h2>
    ): null;

    return (
        <nav className="nav">
            <Link to="/signup"><h2>Sign Up</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
            {logout}
        </nav>
    );
};

export default Header;
 