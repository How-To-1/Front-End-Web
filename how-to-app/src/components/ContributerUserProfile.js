import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHowTo, postHowTo, getUserName} from './store/actions/actionIndex';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';

const initialState = {
    title: '',
    description: '',
    
}


const ContributerUserProfile = props =>{
    const [newHowTo, setNewHowTo] = useState({
        title: '',
        description: '',
        guides_id: Date.now(),
        category: ''
        

    })
    // const [editing, setEditing] = useState(false);
    // const [editHowTo, setEditHowTo] = useState(initialState);
//     const [savedList, setSavedList] = useState([]);

//     const addToSavedList = guide => {
//         setSavedList([...savedList, guide])
// }

const [searchTerm, setSearchTerm] = useState('')
const [searchResults, setSearchResults] = useState([])

const handleSearch = event =>{
    setSearchTerm(event.target.value)
}

useEffect(()=>{
    const results = props.guides.filter(guide =>
        guide.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(results);
}, [searchTerm])



    useEffect(()=>{
        props.fetchHowTo();
    }, [])

    const changeHandler = e => {
        setNewHowTo({...newHowTo, [e.target.name]: e.target.value});

    }

    const submitForm = e =>{
        e.preventDefault();
    }

    // const saveHowTo = guide => {
    //    addToSavedList(guide);
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
    <h1> Dashboard  </h1>
            <form onSubmit={submitForm}>
            <label>
                Add A Title:
                <input 
                name='title'
                id=''
                type='text'
                onChange={changeHandler}
                value={newHowTo.name}
                />
            </label>
            <label>
                Add Instructions:
                <textarea
                name="description"
                id=''
                type='text'
                onChange={changeHandler}
                value={ newHowTo.name}
                />
            </label>
            <label htmlFor="category">
                Choose A Category:
            <select id='category' name='category'onChange={changeHandler}>
            
            <option onChange={changeHandler} value='automotive'>Automotive</option>
            <option onChange={changeHandler} value='Electonics'>Electronics</option>
            <option onChange={changeHandler} value='Food'>Food</option>
             <option onChange={changeHandler} value="Home">Home</option>
            
             </select>
             </label>

            <button type='submit' onClick={()=>props.postHowTo(newHowTo)}>Submit</button>
            </form>


            <div>
            <h2>Search Guides By Title</h2>
            <input 
            type='text' 
            placeholder='Search Guides'
            value={searchTerm}
            onChange={handleSearch}
            />
            
            </div>
            
            <div className='search-list'>
                {searchResults.map(item =>{
                    return(
                        <>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        </>
                    )
                })}
            </div>

        <h2>List of Guides</h2>
        {/* {console.log(props.guides, 'current guides prop.guides')} */}
        {props.guides.map(guide =>{
        
            return(
            <div key={guide.id}>

                <h3>{guide.title}</h3>
                <h4>Steps:</h4>
                <p> {guide.description}</p>
                <h4>Category:</h4>
                <p>{guide.category}</p>
                <button onClick={()=> deleteHowTo(guide.id)}>Delete How To</button>
                 
                 
                 <Link to={`/update-howto/${guide.id}`}>
                     <div>Edit</div> 
                </Link>

                {/* <Link onClick={()=> saveHowTo(guide.id)} to={`/saved-guides/`}>
                    <div>Save Guide</div>
                </Link> */}


               
        
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


        username: state.userReducer.username
       
        
    }
}

export default connect(mapStateToProps, {fetchHowTo, postHowTo, getUserName})( ContributerUserProfile);