import axios from 'axios';

export const key = 'dfa3e4a06ea06d31428c609d8a06dd254b766ffd';
const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})
export default api;





//dfa3e4a06ea06d31428c609d8a06dd254b766ffd

//https://api-ssl.bitly.com/v4/shorten