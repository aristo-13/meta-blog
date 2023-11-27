import axios from 'axios'


const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`
    }
 });
 
 export default api;
 