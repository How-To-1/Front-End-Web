import React from 'react'
import { axiosWithAuth } from '../../../utils/axiosWithAuth';



export const UPDATE_HOWTO = 'UPDATE_HOWTO';
export const FETCH_HOWTO = 'FETCH_HOWTO';
export const FETCH_HOWTO_SUCCESS = 'FETCH_HOWTO_SUCCESS';
export const FETCH_HOWTO_START = 'FETCH_HOWTO_START';
export const FETCH_HOWTO_FAIL = 'FETCH_HOWTO_FAIL';

export const POST_HOWTO_SUCCESS = 'POST_HOWTO_SUCCESS';
export const POST_HOWTO_FAIL = "POST_HOWTO_FAIL";






export const fetchHowTo = () => dispatch =>{
       dispatch({type: FETCH_HOWTO_START})
       axiosWithAuth().get(`/guides`)
       .then(res =>{
           dispatch({type: FETCH_HOWTO_SUCCESS, payload: res.data})
       }).catch(err=>{
           dispatch({type: FETCH_HOWTO_FAIL, payload: err.response});
        })
}


export const postHowTo = newHowTo => dispatch =>{
    axiosWithAuth()
    .post('/guides', newHowTo)
    .then(res =>{
        dispatch({type: POST_HOWTO_SUCCESS, payload: res.action})

    }).catch(err=>{
        dispatch({type:POST_HOWTO_FAIL, payload: err.response});
    })
}