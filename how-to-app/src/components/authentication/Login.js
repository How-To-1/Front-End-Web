import React, {useState, useEffect} from "react";
import {axiosWithAuth} from '../../utils/axiosWithAuth';


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
      localStorage.setItem('token', res.data.payload)
      props.history.push('/')
    }).catch(err =>{console.log(err, 'POST ERROR LOGGING IN')})
  }
  

  useEffect(() => {
    window.localStorage.getItem('token') && props.history.push('/user')
}, [])


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
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
        />
        <input 
        label="Password"
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleChange}

        />
        <br/>
        
        <button>Log In</button>
        {login.isFetching && 'Logging in'}
        </form>
      </div>
    </>
  );
};

export default Login;
