import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-3e3cf.firebaseio.com/'
});

export default instance;