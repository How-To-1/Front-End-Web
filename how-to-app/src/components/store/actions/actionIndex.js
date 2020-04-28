import React from 'react'
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const ADD_HOWTO = 'ADD_HOWTO';
export const REMOVE_HOWTO = 'REMOVE_HOWTO';
export const UPDATE_HOWTO = 'UPDATE_HOWTO';
export const FETCH_HOWTO = 'FETCH_HOWTO';
export const FETCH_HOWTO_SUCCESS = 'FETCH_HOWTO_SUCCESS';

export function addHowTo (task){
    return {
        type: ADD_HOWTO, payload: task
    }
    
}

export function removeHowTo(task){
    return{
        type: REMOVE_HOWTO, payload: task
    }
}

export function updateHowTo(task){
    return{
        type: UPDATE_HOWTO, payload: task
    }
}

export const fetchHowTo = (task) => dispatch =>{
       dispatch({type: FETCH_HOWTO})
       axiosWithAuth().get(`/guides`)
       .then(res =>{
           dispatch({type: FETCH_HOWTO_SUCCCESS, payload: res.data})
       }).catch(err=>{
           dispatch({type: FETCH_HOWTO_FAIL, payload: err.response});
        })
}