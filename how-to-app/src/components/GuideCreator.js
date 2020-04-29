import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import * as yup from 'yup';


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
        description: ''
    });

    const [errors, setErrors] =useState({
        title: '',
        description: ''
    });

    const [post, setPost] = useState([]);

    useEffect(() => {
        guideSchema.isValid(guideData)
        .then(valid => {
            setButtonOff(!valid);});
    }, [guideData]);

    const publishGuide = e => {
        e.preventDefault();
        axios
        .post('https://how-to-guide-unit4-build.herokuapp.com/api/guides', guideData )
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

        const validateChange = e => {
            yup
            .reach(guideSchema, e.target.title)
            .validate(e.target.value || e.target.checked)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.title]: ''
                });
            })
            .catch(er => {
                setErrors({
                ...errors,
                [e.target.title]: er.errors[0]
            });
        });
        };

        const inputChange = e => {
            e.persist();
            const newGuideData = {
                ...guideData, [e.target.title]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
            };
            validateChange(e);
            setGuideData(newGuideData);
        }


    return (
        <form onSubmit={publishGuide} >
        <GuideBuilder>
        <label htmlFor="title" >Guide Title:
            <input type='text' name='title' placeholder='Title' value={guideData.title} onChange={inputChange}  />
        </label>

        {errors.title.length > 0 ? <p>{errors.title}</p> : null}
        <label htmlFor="description" >Guide Body:
            <textarea rows="8" cols="70" type='text' name='description' placeholder='Description' value={guideData.description} onChange={inputChange} />
        </label>

        {errors.description.length > 0 ? <p >{errors.description}</p> : null}
        
        <pre> {JSON.stringify(post, null, 2)}</pre>
        <button disabled={buttonOff} type='submit'>
            Publish
        </button>
        </GuideBuilder>
    </form>
    )
}

export default GuideCreator;