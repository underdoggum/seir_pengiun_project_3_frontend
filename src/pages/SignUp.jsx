import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { GlobalCtx } from '../App';
// import Validation from '../components/SignUpPages/Validation';



const SignUp = (props) => {

    const {gState,setGState} = React.useContext(GlobalCtx)
    const {url} = gState
    const navigate = useNavigate()

    const blank = {
        username:"",
        password: ""
    }

    const [form, setForm] = useState(blank)

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form;

        fetch (`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForm(blank)
            navigate("/login")
        });
    };


return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
            />
            <input 
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            <input
            type="submit" value="signup"
            />
        </form>
    </div>
);
};

export default SignUp
