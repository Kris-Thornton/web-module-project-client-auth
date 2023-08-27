import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFriend = () => {
    const  Navigate  = useNavigate();
    const[form, setForm] = useState({
        username:'',
        age:'',
        email:'',
        error: 'Sorry you are not signed in!'
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const token =localStorage.getItem('token');


        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
        
            .then(resp =>{
                console.log(resp);
                
                   Navigate('/friends') 
                

                
            })
            .catch(err=> {
                console.log(err);
            })
    }



    console.log(form)
    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='friendName'>FRIEND NAME:</label><br />
                <input onChange={handleChange} name='name' id='name' /><br />
                <label htmlFor='age'> AGE:</label><br />
                <input onChange={handleChange} name='age' id='age' /><br />
                <label htmlFor='friendEmail'>FRIEND EMAIL:</label><br />
                <input onChange={handleChange} name='email' id='email' /><br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}




export default AddFriend