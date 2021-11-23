import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { GlobalCtx } from '../App';
import { useState } from 'react';
// import Validation from '../components/SignUpPages/Validation';


const Login = (props) => {

    const {gState,setGState} = useContext(GlobalCtx)
    const {url} = gState
    const navigate = useNavigate()

    const blank = {
        username:"",
        password: "",
        isSeller: false
    }

    const [form, setForm] = useState(blank)



    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

      const isSellerTrue = () => {
        setForm({
            ...form,
            isSeller:true
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password, isSeller} = form

        fetch (`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username, password, isSeller})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.localStorage.setItem("token", JSON.stringify(data))
            setGState({...gState, token: data.token, userData: data.userData})
            setForm(blank)
            data.userData._doc.isSeller === true ? navigate("/items") : navigate("/allItems")
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
                    type="radio"
                    id="seller"
                    name="isSeller"
                    onChange = {isSellerTrue}
                />
                <label htmlFor="seller">Restaurant</label><br/>
            <input
            type="submit" value="Login"
            />
        </form>
    </div>
);
};

export default Login

