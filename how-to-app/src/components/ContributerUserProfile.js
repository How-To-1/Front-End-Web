import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHowTo, postHowTo} from './store/actions/actionIndex';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    title: '',
    description: '',
    
}


const ContributerUserProfile = props => {
    const [newHowTo, setNewHowTo] = useState({
        title: '',
        description: '',
        guides_id: Date.now()
        

    })
    // const [editing, setEditing] = useState(false);
    // const [editHowTo, setEditHowTo] = useState(initialState);

    useEffect(()=>{
        props.fetchHowTo();
    }, [])

    const changeHandler = e => {
        setNewHowTo({...newHowTo, [e.target.name]: e.target.value});

    }

    const submitForm = e =>{
        e.preventDefault();
    }

    // const editForm = e => {
    //     e.preventDefault();
    // }

    const deleteHowTo = id =>{
        
        axiosWithAuth()
        .delete(`/guides/${id}`)
        .then(res =>
            
            console.log('successfully deleted', res),
            props.history.push('/user'))
            .catch(err=>
                console.log('sorry could not delete:', err))
    }

    return(
        <div>
            

            <div>
    <h1>Hello {props.username}</h1>
            <form onSubmit={submitForm}>
            <label>
                New How To Title:
                <input 
                name='title'
                id=''
                type='text'
                onChange={changeHandler}
                value={newHowTo.name}
                />
            </label>
            <label>
                New Instructions:
                <textarea
                name="description"
                id=''
                type='text'
                onChange={changeHandler}
                value={ newHowTo.name}
                />
            </label>
            <input
            type='dropdown'
             />

            <button type='submit' onClick={()=>props.postHowTo(newHowTo)}>Submit</button>
            </form>

        <h3>Current Guides</h3>
        {/* {console.log(props.guides, 'current guides prop.guides')} */}
        {props.guides.map(guide =>{
        
            return(
            <div key={guide.id}>

                <p>{guide.title}</p>
                <p>{guide.description}</p>
                <button onClick={()=> deleteHowTo(guide.id)}>Delete How To</button>
                
               
        
        </div>)
         })} 
        </div>
         


        </div>
    )
}
const mapStateToProps = state =>{
    console.log('userprofile map state', state);
    return{
        guides: state.howToReducer.guides,
        isFetching: state.howToReducer.isFetching,
        error: state.howToReducer.error,
        addingtHowTo: state.howToReducer.addingtHowTo,

        
    }
}

export default connect(mapStateToProps, {fetchHowTo, postHowTo})( ContributerUserProfile);