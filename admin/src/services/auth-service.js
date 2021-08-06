import axios from 'axios';
import config from '../config';
import authHeader from './auth-header';

const API_URL = config.WS_BASE_URL;

const login = (email, password) => {
    return axios.post(API_URL + '/login/authorization', { email, password })
        .then((response) => {
            if (response.data.accessToken) {
                response.data.accessToken = 'Bearer ' + response.data.accessToken;
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = async () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return axios.get(API_URL + '/login/whois', { headers: authHeader ()})
    .then((response) => {
        return response
    })
    .catch(error => console.log(error));
};

const authservice = {
    login,
    logout,
    getCurrentUser
};

export default authservice;