import React, {useState, useEffect} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Button} from 'reactstrap';
import styled from 'styled-components';


const submitFormStyle = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;
margin-left: 50%;
`

const EditHowTo = props =>{
    const initialHowTo = {
        
        title: '',
        description: '',
        category: '',
        guides_id: Date.now(),
        image: null,

    }

    const push = useHistory();
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
        .put(`/guides/${guide.id}`, guide)
        .then(res =>{
            push.push(`/user`);
        })
    }

    const deleteHowTo = id =>{
        
        axiosWithAuth()
        .delete(`/guides/${id}`)
        .then(res =>
            
            console.log('successfully deleted', res),
            // alert('are you sure you want to delete this how to?'),
            push.push('/user')
            )
            .catch(err=>
                console.log('sorry could not delete:', err))

    }

  

    





    return(
        <submitFormStyle>
            <h2>Edit Guide:</h2>
            <h3> {`${guide.title}`}</h3>
        <form  onSubmit={updateGuide}>
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
            <select id='category' name='category' onChange={changeHandler}>
            
            <option onChange={changeHandler}  value='automotive'>Automotive</option>
            <option onChange={changeHandler} value='Electonics'>Electronics</option>
            <option onChange={changeHandler} value='Food'>Food</option>
             <option onChange={changeHandler} value="Home">Home</option>
            
             </select>
        
        </form>
        <Button outline color="success" onClick={()=>updateGuide()}>Submit Changes!</Button>
        <Button outline color="danger" onClick={()=> deleteHowTo(guide.id)}>Delete How To</Button>
        </submitFormStyle>
    )






}

 export default EditHowTo;