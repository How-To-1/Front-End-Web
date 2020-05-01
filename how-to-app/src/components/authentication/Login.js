import React, {useState, useEffect} from "react";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import styled from 'styled-components'

const Pagebox = styled.div`
background-color:#84f2d6;
`

const Loginbox = styled.div`
margin-top:10px;
margin-bottom:10px;
margin-left: auto;
margin-right: auto;
width: 50%;
text-align:center;
background-color:#fc6b3f;
border:4px solid #fff6da;
`

const Button = styled.button`
margin-bottom:10px;
`



const initialState = {
  
    username: '',
    password: '',
    isFetching: false
  
}

const Login = props => {
  

  const [login, setLogin] = useState(initialState)

const handleChange = e =>{
  setLogin({
    
      ...login, [e.target.name]: e.target.value
    
  })
}

  const handleLogin = e => {
    e.preventDefault();
    setLogin({...login, isFetching: true});
    axiosWithAuth()
    .post('/auth/users/login', login)
    .then(res =>{
      console.log('LOG IN POST', res)
      localStorage.setItem('token', res.data.token)
      props.history.push('/user')
    }).catch(err =>{console.log(err, 'POST ERROR LOGGING IN')})
  }
  

  useEffect(() => {
    window.localStorage.getItem('token') && props.history.push('/user')
}, [])


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
    <Pagebox>
    <Loginbox>
    <div>
      <h1>Welcome to How To!</h1>
    </div>

      <div>
      <h2>Login Here!</h2>
      </div>

      <div>
        <form onSubmit={handleLogin}>
        <input 
        label= 'Username'
        type = 'text'
        name = 'username'
        placeholder = 'username'
        value={login.username}
        onChange={handleChange}
        /><br /><br />
        <input 
        label="Password"
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleChange}

        />
        <br/><br />
        
        <Button>Log In</Button>
        {login.isFetching && 'Logging in'}
        </form>
      </div>
      </Loginbox>
      </Pagebox>
    </>
  );
};

export default Login;
