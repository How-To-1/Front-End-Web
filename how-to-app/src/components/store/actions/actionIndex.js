import React from 'react'

export const ADD_HOWTO = 'ADD_HOWTO';
export const REMOVE_HOWTO = 'REMOVE_HOWTO';
export const UPDATE_HOWTO = 'UPDATE_HOWTO';
export const FETCH_HOWTO = 'FETCH_HOWTO';

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

export function fetchHowTo(task){
    return{
        type: FETCH_HOWTO, payload: task
    }
}