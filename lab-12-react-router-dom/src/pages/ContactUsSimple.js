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

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    // let lookup = {setFullname, setEmail};
    // const updateFullName = (e) => {
    //     lookup[e.target.name](e.target.value)
    // }

    const updateFullName = (e) => {
        setFullname(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
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
                <input type="text" name="fullname" value={fullname} onChange={updateFullName}/>
            </div>
            <div>
                <label>email: </label>
                <input type="text" name="email" value={email} onChange={updateEmail}/>
            </div>
            <button onClick={submitForm}>submit</button>
        </React.Fragment>
    )
}