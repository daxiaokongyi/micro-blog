import axios from 'axios';
import { FETCH_TITLES } from './types';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export const fetchTitlesFromAPI = () => {
    // return async function inside
    return async (dispatch) => {
        // get result from async API call
        const result = await axios.get(`${API_URL}`);
        // return action
        return dispatch(getTitles(result.data));
    }
}

const getTitles = (titles) => {
    return {
        type: FETCH_TITLES,
        payload: {
            titles
        }
    }
}

