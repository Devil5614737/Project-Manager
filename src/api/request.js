import axios from 'axios';

export const request=axios.create({
    baseURL:'https://project-manger-backend.onrender.com/api',
    headers:{
        'x-auth-token':localStorage.getItem('token')
    }
})