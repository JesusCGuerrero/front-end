import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {

    // const { push } = useHistory()

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChanges = (input) => {
        setUser({...user, [input.target.name] : input.target.value})
        console.log('User:',user)
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('new', user)
    //     axiosWithAuth()
    //       .post('', user)
    //       .then(res => {
    //         console.log(res)
    //         console.log('Submitted Credentials', user)
    //         localStorage.setItem('token', res.data.payload);
    //         push('/dashboard');
    //       })
    //       .catch(err => console.log({ err }));
    //   };

    return (
        <div className='loginBox'>
            <h3>Login</h3>
            <form className='loginForm'>
                <input 
                    type='text' 
                    name='username'
                    placeholder='username'
                    onChange={handleChanges}
                    required
                />
                <br/>
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChanges}
                    required
                />
                <br/>
                <input type='submit' />
                <br/>
                <label for='newUser' className='newUserLabel'>New user?</label>
                <Link to='/register' className='linkToRegister'>Register</Link>
                <br/>
            </form>
        </div>
    )
}

export default Login