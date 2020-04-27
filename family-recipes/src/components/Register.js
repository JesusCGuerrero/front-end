import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { DataContext } from '../context/data';

const Register = () => {

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        id: Date.now()
    })

    const submitUser = (e) => {
        // e.preventDefault()
        // Axios.post(`http://localhost:3333/smurfs`, newUser)
        // .then(console.log('Registration Successful', newUser))
    }

    const handleChanges = (input) => {
        setNewUser({...newUser, [input.target.name] : input.target.value})
    }


    return (
        <div className='loginBox'>
            <h3>Register</h3>
            <form className='loginForm'>
                <input
                    type='text' 
                    placeholder='username'
                    onChange={handleChanges} 
                    required
                />
                <br/>
                <input 
                    type='password' 
                    placeholder='password'
                    onChange={handleChanges}
                    required
                />

                <button onClick={submitUser}>Register</button>

                <label for='newUser' className='newUserLabel'>Already have an account?</label>
                <Router>
                    <Link to='/' className='linkToLogin'>Login</Link>
                </Router>
                <br/>
            </form>
        </div>
    )
}

export default Register