import React, {useState, useEffect} from 'react';
import{useParams,useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const EditHowTo = props =>{
    const initialHowTo = {
        
        title: '',
        description: '',
        category: '',
        guides_id: Date.now(),
        image: null,

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
        setGuide({...guide, [e.target.name]: e.target.value})

    }

    const updateGuide = id =>{
       
        axiosWithAuth()
        .put(`/guides/${guide.guides_id}`, guide)
        .then(res =>{
            push(`/user`);
        })
    }

    return(
        <div>
            <h2>Edit Form:</h2>
            <h3> {`${guide.title}`}</h3>
        <form onSubmit={updateGuide}>
            <input 
            type='text'
            name='title'
            placeholder='Edit The Title'
            value={guide.title}
            onChange={changeHandler}
             />
             <label value={guide.description}>
             <input 
             type="text"
             name="description"
             placeholder="Edit the Description"
             
             onChange={changeHandler}
             />
             </label>
            <select id='category' name='category'onChange={changeHandler}>
            
            <option onChange={changeHandler} value='automotive'>Automotive</option>
            <option onChange={changeHandler} value='Electonics'>Electronics</option>
            <option onChange={changeHandler} value='Food'>Food</option>
             <option onChange={changeHandler} value="Home">Home</option>
            
             </select>
        
        </form>
        <button onClick={()=>updateGuide()}>Submit Changes!</button>
        </div>
    )






}

 export default EditHowTo;