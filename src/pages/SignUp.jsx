import React, { useState, useEffect } from 'react'
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
        isSeller: false,
        sellerName: "",
        phoneNumber: "",
        email: ""
    }

    const [form, setForm] = useState(blank)

    // state for which form is displayed based on radio button selection
    const [displayedForm, setDisplayedForm] = useState(null)

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };


    const handleSubmit = (event) => {
        console.table(form)
        event.preventDefault()
        const {username, password, isSeller, sellerName, phoneNumber, email} = form;

        fetch (`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username, password, isSeller, sellerName, phoneNumber, email})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForm(blank)
            navigate("/login")
        });
    };


    // form only for buyers
    const buyerForm = (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="radio"
                    id="seller"
                    name="isSeller"
                    value={true}
                    onClick={() => setDisplayedForm(sellerForm)}
                />
                <label htmlFor="seller">Restaurant</label><br />
                <input
                    type="radio"
                    id="buyer"
                    name="isSeller"
                    value={false}
                    onClick={() => setDisplayedForm(buyerForm)}
                    defaultChecked
                />

                <label htmlFor="seller">Buyer</label><br />
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
                type="submit" value="Sign Up"
                />
            </form>
        </div>
    )

    // form only for sellers
    const sellerForm = (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="radio"
                    id="seller"
                    name="isSeller"
                    value={true}
                    defaultChecked
                    onClick={() => setDisplayedForm(sellerForm)}
                />
                <label htmlFor="seller">Restaurant</label><br />
                <input
                    type="radio"
                    id="buyer"
                    name="isSeller"
                    value={false}
                    onClick={() => setDisplayedForm(buyerForm)}
                />
                <label htmlFor="seller">Buyer</label><br />

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

    useEffect(() => {
        setDisplayedForm(buyerForm)    
    }, [])

    // return whichever form the user chooses from the radio buttons
    return (
        displayedForm
    )
}

export default SignUp
