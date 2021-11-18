import React, {useState, useEffect} from 'react'
import Validation from './Validation';



const SignUp = ({submitForm}) => {

    const [form, setForm] = useState({
        name:"",
        email:"",
        password: "",
    })

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false); 


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };


    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(form));
        setDataIsCorrect(true);
    };


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]); 

    return (
        <div className = "Container">
            <div className = "app-wrapper">
                <div>
                    <h2>Create Account</h2>
                </div>
                <form className="signup-form">
                    <div>
                        <label>Name:</label>
                        <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}  
 {/* if there is an error it will be stored in paragraph tag */}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                         type="email"
                         name="email"
                        value={form.email}
                        onChange={handleChange}/>
                        {errors.name && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                         type="password"
                         name="password"
                         value={form.password}
                         onChange={handleChange}/>
                         {errors.name && <p>{errors.password}</p>}
                    </div>
                    <div>
                        <button onClick={handleFormSubmit}>SIGN UP</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default SignUp
