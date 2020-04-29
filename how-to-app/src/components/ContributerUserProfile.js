import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHowTo, postHowTo} from './store/actions/actionIndex';

const ContributerUserProfile = props => {
    const [newHowTo, setNewHowTo] = useState({
        title: '',
        description: '',
        

    })

    useEffect(()=>{
        props.fetchHowTo();
    }, [])

    const changeHandler = e => {
        setNewHowTo({...newHowTo, [e.target.name]: e.target.value});

    }

    const submitForm = e =>{
        e.preventDefault();
    }

    return(
        <div>
            

        
            <h1>Creator User Dashboard</h1>
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
            <button type='submit' onClick={()=>props.postHowTo(newHowTo)}>Submit</button>
            </form>

        <h3>Current Guides</h3>
        {console.log(props.guides, 'current guides prop.guides')}
        {props.guides.map(guide =>{
        
            return(
            <div key={guide.id}>
                <p>{guide.title}</p>
                <p>{guide.description}</p>
       
        
        
        </div>)
         })} 
        </div>
    )
}
const mapStateToProps = state =>{
    console.log('userprofile map state', state);
    return{
        guides: state.howToReducer.guides,
        isFetching: state.howToReducer.isFetching,
        error: state.howToReducer.error,
        addingtHowTo: state.howToReducer.addingtHowTo
    }
}

export default connect(mapStateToProps, {fetchHowTo, postHowTo})( ContributerUserProfile);