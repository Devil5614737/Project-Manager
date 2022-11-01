import axios from 'axios';

export const request=axios.create({
    baseURL:'http://localhost:4000/api',
    headers:{
        'x-auth-token':localStorage.getItem('token')
    }
})