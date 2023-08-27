import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const Navigate = useNavigate();
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    // After for is submitted, the change handler is triggered. In this case we will use a spread operator to keep the current state of cred (which is an empty string(see above)) target the name..(ie..username in the input element) and return or add each value to the new updated state.
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    // We add this handleSubmit to trigger the chain of events via change handlers from the input elements that will either update state, redirect the page and/or do so do so with an a authenticator/token.
    // In this case when the form is submitted, we will make an axios call to an API.
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
        .then(resp =>{ 
            console.log(resp)
            localStorage.setItem('token', resp.data.token);
            Navigate('/friends')
        })
        .catch(err => {
            console.log(err);
        })
    }


    
    return (
        <>

            <div>
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    {/* Notice the htmlFor on the label and the id on the input are the same.  This is done to connect the two together so that when a user clicks on the word (username) it will choose the correct input to type into. The id on input element also helps with other control attributes  */}
                <div>
                    <label htmlFor='username'>USERNAME:</label><br />
                    <input onChange={handleChange} id='username' name="username" /><br /><br />
                </div>
                    
                    {/* In the input, we want to add a name that corresponds with the state name. This way we can correctly connect this input to the initial state that will/can be updated throughout the program.   */}
                    {/* We want to add an onChange attribute to the input to point to a change handler when the form is submitted (Look at handleChange next to follow flow) */}
                <div>
                    <label htmlFor='password'>PASSWORD:</label><br />
                    <input onChange={handleChange} type='password' id='password' name="password" /><br /><br />
                </div>
                    


                    <button>Submit</button>
                </form>
            </div>
        </>


    )
}


export default Login;





