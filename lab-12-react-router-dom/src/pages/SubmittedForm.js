import React from 'react';
import { useState } from 'react';

export default function SubmittedForm(){
    // the first argument of useState is teh default value of the state variable

    // useState returns an array of two results
    // => assign first result into message, second result into setMessage
    // the first result is the state variable
    // the second result is a function that we can use to set the value of the state variable

    // const [message, setMessage] = useState("the quick brown fox")

    // function changeMessage(){
    //     setMessage('Jack and Jill')
    // }

    return(
        <React.Fragment>
        <h1>form submitted</h1>
        {/* <h3>{message}</h3> */}
        {/* <button onClick={changeMessage}>change message</button> */}
        </React.Fragment>
    )
}