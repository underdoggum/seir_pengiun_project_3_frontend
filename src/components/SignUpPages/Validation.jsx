import React from 'react'


const Validation = (form) => {

    let errors = {};

    if(!form.name){
        errors.name="Name is required!"
    }

    // referenced - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    // if(!form.email){
    //     errors.email="Email is required!"
    // } else if (!/\S+@\S+\.\S+/.test(form.email)){
    //     errors.email = "Email is invalid"
    // }


    if(!form.password){
        errors.password="Password is required!"
    } else if (form.password.length < 6){
        errors.password = "Password must be more than 6 characters."
    }

    return errors;

}

export default Validation
