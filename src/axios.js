import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://theotheoriestinderbackend.herokuapp.com',
})

export default instance;