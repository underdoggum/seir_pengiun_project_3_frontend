import React from 'react'
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

    const [form, setForm] = React.useState(blank)

    // const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setDataIsCorrect] = useState(false); 


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





    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     // setErrors(Validation(form));
    //     // setDataIsCorrect(true);
    // }; 


    // useEffect(()=>{
    //     if(Object.keys(errors).length === 0 && dataIsCorrect){
    //         submitForm(true);
    //     }
    // }, [errors]); 

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



//         <div className = "Container">
//             <div className = "app-wrapper">
//                 <div>
//                     <h2>Create Account</h2>
//                 </div>
//                 <form className="signup-form">
//                     <div>
//                         <label>Name:</label>
//                         <input 
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         />
//                         {/* {errors.name && <p>{errors.name}</p>}   */}
//  {/* if there is an error it will be stored in paragraph tag */}
//                     </div>
//                     <div>
//                         <label>Email:</label>
//                         <input
//                          type="email"
//                          name="email"
//                         value={form.email}
//                         onChange={handleChange}/>
//                         {/* {errors.name && <p>{errors.email}</p>} */}
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input
//                          type="password"
//                          name="password"
//                          value={form.password}
//                          onChange={handleChange}/>
//                          {/* {errors.name && <p>{errors.password}</p>} */}
//                     </div>
//                     <div>
//                         <button onClick={handleFormSubmit}>SIGN UP</button>
//                     </div>
//                 </form>
//             </div>
            
//         </div>