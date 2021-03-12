import axios from 'axios';

const url = 'https://navedex-api.herokuapp.com/v1/';
const token = localStorage.getItem('token');

const api = axios.create({
    baseURL: url,
    headers: {'Authorization': 'Bearer '+token}
});

export default api;