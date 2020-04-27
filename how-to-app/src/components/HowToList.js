import React from 'react';
import {connect} from 'react-redux';

import HowTo from './HowTo';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const HowToList = props => {

    return(
        <div>
        <h2>INSERT HOW TO HEADLINER HERE</h2>
        {/* need to map through my howtos and display them here. */}

        
        {/* {.map(item=>{
            return(<HowTo key={item.id} item={item})
        })} */}

        </div>
    )



}//closes howtolist component