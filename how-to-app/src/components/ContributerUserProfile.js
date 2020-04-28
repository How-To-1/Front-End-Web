import React from 'react';
import {connect} from 'react-redux'

const ContributerUserProfile = props => {


    return(
        <div>
            <h1>User Dashboard</h1>

        <h3>List of Guides</h3>
        
        {/* {props.guides && props.guides.map(guide =>{
            <div key={guide.id}>
                <p>{guide.title}</p>
                <p>{guide.description}</p>
       
        
        
        </div>
        })} */}
        </div>
    )
}
const mapStateToProps = state =>{
    console.log('userprofile map state', state);
    return{
        guides: state.howToReducer.guides,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})( ContributerUserProfile);