
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import {axiosWithAuth} from '../../utils/axiosWithAuth';



const signUpSchema = yup.object().shape({
    name: yup
    .string()
    .min(3, 'Name is required')
    .required('Name is required'),
    
    // email:yup
    // .string()
    // .email('Please provide a valid email')
    // .required('An email is required'),

    password:yup
    .string()
    .min(8, 'The password must have 4 or more characters')
    .required('Password must be included')
});


const SignUpPage = props => {

    const [buttonOff, setButtonOff] = useState(true);
    const [signUpData, setSignUpData] =useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] =useState({
        username: '',
        password: ''
    });

    //const [post, setPost] = useState([]);

    useEffect(() => {
        signUpSchema.isValid(signUpData)
        .then(valid => {
            setButtonOff(!valid);});

    }, [signUpData]);

    const signUpSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/auth/users/register',  signUpData )
        .then(response => {
            props.history.push('/contributor-dashboard')
            console.log('success', signUpData);
            
        })
        .catch(err => console.log('Signup Error:', err));
    };

        const validateChange = e => {
            yup
            .reach(signUpSchema, e.target.name)
            .validate(e.target.value || e.target.checked)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                });
            })
            .catch(er => {
                setErrors({
                ...errors,
                [e.target.name]: er.errors[0]
            });
        });
        };

        const inputChange = e => {
            e.persist();
            const newSignUpData = {
                ...signUpData, [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
            };
            validateChange(e);
            setSignUpData(newSignUpData);
        }


    return (
        <form onSubmit={signUpSubmit} >
        <div>
        <label htmlFor="name" >
            <input type='text'
             name='name' 
             placeholder='Name' 
             value={signUpData.name} 
             onChange={inputChange}  />
            Name:
        </label>

        {/* {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        <label htmlFor="email" >
            <input type='email'
             name='email'
              placeholder='Email'
               value={signUpData.email}
                onChange={inputChange} />
            Email:
        </label> */}

        {errors.email.length > 0 ? <p >{errors.email}</p> : null}
        <label htmlFor="password" >
            <input type='text' 
            name='password' 
            placeholder='Password' 
            value={signUpData.password} 
            onChange={inputChange} />
            Password:
        </label>

        {errors.password.length > 0 ? <p >{errors.password}</p> : null}
    
        <pre> {JSON.stringify(signUpData, null, 2)}</pre>
        <button disabled={buttonOff} type='submit'>
            Submit
        </button>
        </div>
    </form>
    )
}

export default SignUpPage;
