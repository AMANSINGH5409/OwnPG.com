import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`
    }
    return req;
});


//AUTH RELATED APIs
export const signin = (formData) => API.post('/users/signin', formData);

export const signup = (formData) => API.post('/users/signup', formData);

// PG Related APIs
export const getAllPgs = () => API.get('/pg');

export const addPg = (pgdetails) => API.post('/pg',pgdetails);