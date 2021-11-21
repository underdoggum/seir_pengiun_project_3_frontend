import React,  {useState} from 'react'
import SignUpSuccess from './SignUpSuccess';
import Index from '../../pages/Index';
import SignUp from '../../pages/SignUp';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };

    return (
        <div>
          {!formIsSubmitted ? (
          <SignUp submitForm={submitForm}/>
          ) : (
          <Index/>
          )}
        </div>
    );

};

export default Form
