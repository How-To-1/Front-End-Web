import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import * as yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const GuideBuilder = styled.div`
display:flex;
flex-direction: column;
`


const guideSchema = yup.object().shape({
    title: yup
    .string()
    .min(3, 'Title is required')
    .required('Title is required'),
    
    description:yup
    .string()
    .min(3, 'Please provide a valid description')
    .required('A description is required')
});


const GuideCreator = () => {

    const [buttonOff, setButtonOff] = useState(true);
    const [guideData, setGuideData] =useState({
        title: '',
        description: '',
        guides_id: Date.now()
    });

    const [errors, setErrors] =useState({
        title: '',
        description: '',
        guides_id: Date.now()
    });

    const [post, setPost] = useState([]);

    useEffect(() => {
        guideSchema.isValid(guideData)
        .then(valid => {
            setButtonOff(!valid);});
    }, [guideData]);

    const publishGuide = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/guides', guideData )
        .then(response => {
            setPost(response.data);
            console.log('success', post);
            setGuideData({
                title: '',
                description: ''
            });
        })
        .catch(err => console.log(err.response));
    };
    console.log(post);

        const validateChange = e => {
            yup
            .reach(guideSchema, e.target.name)
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
            const newGuideData = {
                ...guideData, [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
            };
            validateChange(e);
            setGuideData(newGuideData);
        }


    return (
        <GuideBuilder>
        <form onSubmit={publishGuide} >
        <div>
        <label htmlFor="title" >Guide Title:
            <input type='text' name='title' placeholder='Title' value={guideData.name} onChange={inputChange}  />
        </label>

        {errors.title.length > 0 ? <p>{errors.title}</p> : null}
        <label htmlFor="description" > Guide Body:
            <textarea rows="8" cols="70" type='text' name='description' placeholder='Description' value={guideData.description} onChange={inputChange} />
            Guide Body:
        </label>

        {errors.description.length > 0 ? <p >{errors.description}</p> : null}
        
        {/* <pre> {JSON.stringify(post, null, 2)}</pre> */}
        <button disabled={buttonOff} type='submit'>
            Publish
        </button>
        </div>
    </form>
    </GuideBuilder>
    )
}

export default GuideCreator;