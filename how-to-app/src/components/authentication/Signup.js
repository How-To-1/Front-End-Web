import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const SignUp = props => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSignUpInfo({ ...signUpInfo, isFetching: true });
    axiosWithAuth()
      .post("/auth/users/register", signUpInfo)
      .then(res => {
        props.history.push("/user");
      })
      .catch(err =>
        console.log("sorry, an error has occured while trying to login", err)
      );
  };
  return (
    <div className="entry-container">
      <h1>New Sign Up</h1>
    
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          required
          label="Username"
          id="username"
          name="username"
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <input
          required
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <br />
        <button>Sign Up</button>
        {signUpInfo.isFetching}
      </form>
      <br />
      Already have an account? <Link to="/">Log In</Link>
    </div>
  );
};
export default SignUp;





// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import * as yup from 'yup';
// import {axiosWithAuth} from '../../utils/axiosWithAuth';



// const signUpSchema = yup.object().shape({
//     name: yup
//     .string()
//     // .min(3, 'Name is required')
//     .required('Name is required'),
    
//     // email:yup
//     // .string()
//     // .email('Please provide a valid email')
//     // .required('An email is required'),

//     password:yup
//     .string()
//     // .min(8, 'The password must have 4 or more characters')
//     .required('Password must be included')
// });


// const SignUpPage = props => {

//     const [buttonOff, setButtonOff] = useState(true);
//     const [signUpData, setSignUpData] =useState({
//         username: '',
//         password: ''
//     });

//     const [errors, setErrors] =useState({
//         username: '',
//         password: ''
//     });

//     //const [post, setPost] = useState([]);

//     useEffect(() => {
//         signUpSchema.isValid(signUpData)
//         .then(valid => {
//             setButtonOff(!valid);});

//     }, [signUpData]);

//     const signUpSubmit = e => {
//         e.preventDefault();
//         axiosWithAuth()
//         .post('/auth/users/register',  signUpData )
//         .then(response => {
//             props.history.push('/contributor-dashboard')
//             console.log('success', signUpData);
            
//         })
//         .catch(err => console.log('Signup Error:', err));
//     };

//         const validateChange = e => {
//             yup
//             .reach(signUpSchema, e.target.name)
//             .validate(e.target.value || e.target.checked)
//             .then(valid => {
//                 setErrors({
//                     ...errors,
//                     [e.target.name]: ''
//                 });
//             })
//             .catch(er => {
//                 setErrors({
//                 ...errors,
//                 [e.target.name]: er.errors[0]
//             });
//         });
//         };

//         const inputChange = e => {
//             e.persist();
//             const newSignUpData = {
//                 ...signUpData, [e.target.name]:
//                 e.target.type === 'checkbox' ? e.target.checked : e.target.value
//             };
//             validateChange(e);
//             setSignUpData(newSignUpData);
//         }


//     return (
//         <form onSubmit={signUpSubmit} >
//         <div>
//         <label htmlFor="name" >
//             <input type='text'
//              name='name' 
//              placeholder='Name' 
//              value={signUpData.name} 
//              onChange={inputChange}  />
//             Name:
//         </label>

//         {/* {errors.name.length > 0 ? <p>{errors.name}</p> : null}
//         <label htmlFor="email" >
//             <input type='email'
//              name='email'
//               placeholder='Email'
//                value={signUpData.email}
//                 onChange={inputChange} />
//             Email:
//         </label> */}

//         {errors.email.length > 0 ? <p >{errors.email}</p> : null}
//         <label htmlFor="password" >
//             <input type='text' 
//             name='password' 
//             placeholder='Password' 
//             value={signUpData.password} 
//             onChange={inputChange} />
//             Password:
//         </label>

//         {errors.password.length > 0 ? <p >{errors.password}</p> : null}
    
//         <pre> {JSON.stringify(signUpData, null, 2)}</pre>
//         <button disabled={buttonOff} type='submit'>
//             Submit
//         </button>
//         </div>
//     </form>
//     )
// }

// export default SignUpPage;
