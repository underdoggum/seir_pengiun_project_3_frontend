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
        console.table(form)
        event.preventDefault()
        const {username, password, isSeller} = form;

        fetch (`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username, password, isSeller})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForm(blank)
            navigate("/login")
        });
    };


    const sellerForm = (
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                /> <br />
                <input 
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                /> <br />

                <input
                    type="radio"
                    id="seller"
                    name="isSeller"
                    onChange = {isSellerTrue}
                    // defaultChecked
                />
                <label htmlFor="seller">Restaurant</label><br />
                <input
                    type="radio"
                    id="buyer"
                    name="isSeller"
                    value={false}
                />
                <label htmlFor="seller">Buyer</label><br />

                <input
                    type="text"
                    name="sellerName"
                    value={form.sellerName}
                    onChange={handleChange}
                    placeholder="Your Restaurant's Name"
                /> <br />
                <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                /> <br />
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                /> <br />

                <input
                type="submit" value="Sign Up"
                />
            </form>
        </div>
    )


    // if user is a seller, return seller form
    return (
        sellerForm
    )

    // if user 
}

export default SignUp
