import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://how-to-guide-unit4-build.herokuapp.com/api',
        headers:{
            Authorization: token
        }
    })
}