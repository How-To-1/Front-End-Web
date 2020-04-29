import React, {useState, useEffect} from 'react';
import{useParams,useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const EditHowTo = props =>{
    const initialHowTo = {
        id: '',
        title: '',
        description: '',
        category: '',

    }

    const {push} = useHistory();
    const [guide, setGuide] = useState(initialHowTo)
    const {id} = useParams();

    useEffect(()=>{
        axiosWithAuth()
        .get(`/guides/${id}`)
        .then(res =>{
            console.log('res from useEffect on Edit Page', res)
            setGuide(res.data)
        }).catch(err=> console.log('editpage', err))

    }, [id])


    const changeHandler =e=>{
        e.persist();
        setGuide({...guide, [e.taget.name]: e.target.value})

    }

    const updateGuide = id =>{
        id.preventDefault();
        axiosWithAuth()
        .put(`/guides/${id}`)
        .then(res =>{
            push(`/${id}`);
        })
    }

    return(
        <div>
        <form onSubmit={updateGuide}>
            <input 
            type='text'
            name='title'
            placeholder='Edit The Title'
            value={guide.title}
            onChange={changeHandler}
             />
        
        </form>
        <button>Submit Changes!</button>
        </div>
    )






}

 export default EditHowTo;