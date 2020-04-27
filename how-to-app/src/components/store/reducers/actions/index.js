import {axiosWithAuth} from './utils/axiosWithAuth';


export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_HOWTO = "UPDATE_HOWTO";
export const SAVE_HOWTO = "SAVE_HOWTO";
export const DELETE_HOWTO = "DELETE_HOWTO";
export const POST_DATA = "POST_DATA";





export const getHowTo = () => dispatch =>{
    dispatch({type: FETCH_DATA});
    axiosWithAuth()
    .get('')
    .then(res => {
        console.log('.get', res.data);
        dispatch({UPDATE_HOWTO, payload: res.data})
    }).catch(err=>{})

}

export const postNewHowTo = () => dispatch => {
dispatch({type: POST_DATA, payload: value});
    axiosWithAuth()
    .post('')
    .then(res=>{
        console.log('post request:', res)
        dispatch({type:UPDATE_HOWTO, payload: res.data})
    })
}