import axios from 'axios';
import config from '../../../config';

const API_URL = config.WS_BASE_URL;

// action
export const getProfile = (data) => {
    return {
        type: "profile/getProfile",
        payload: data
    }
};

// action creator
const fetchProfile = () => async dispatch => {
    return axios.get(API_URL + '/login/whois')
        .then((response) => {
            const { data } = response.data;
            dispatch(getProfile(data))
        })
        .catch(error => console.log(error));
};

export default fetchProfile;