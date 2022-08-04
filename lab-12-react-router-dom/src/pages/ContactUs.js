import React from 'react';
import { useState } from 'react';
// a hook is a function provided by React or a third party package
// useNavigate creates a function which we can use to change 'pages'
import {useNavigate} from 'react-router-dom';

export default function ContactUs(props){
    // create a navigation function returned from useNavigate();
    // basically like a reverse callback function => call a hook and get a function that you can call to make
    // react-router-dom do something => react-router-dom provides you the callback function
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        fullname: '',
        email: ''
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState, // <-- duplicating the original form state object
            [e.target.name]: e.target.value // <-- rewrite the key that has been changed
        })
    }

    // can define function in javascript and python
    function submitForm(){
        // use the return navigate function to change pages
        navigate('/form-submitted')
    }


    return(
        <React.Fragment>
            <h1>Contact us</h1>
            <div>
                <label>full name: </label>
                <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField}/>
            </div>
            <div>
                <label>email: </label>
                <input type="text" name="email" value={formState.email} onChange={updateFormField}/>
            </div>
            <button onClick={submitForm}>submit</button>
        </React.Fragment>
    )
}