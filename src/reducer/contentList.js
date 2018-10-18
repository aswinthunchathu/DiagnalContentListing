import { combineReducers } from 'redux';

import {
    FETCH_CONTENT, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_ERROR
} from '../constants/actionTypes';

const list = ( 
    state = {
    fetching: false,
    fetched: false,
    current : 0,
    data: {},
    hasMore : false,
    error: null
}, action) => {
    switch (action.type) {
        case FETCH_CONTENT : {
            return {
                ...state,
                fetching : true
            }
        }
        case FETCH_CONTENT_SUCCESS : {
            return {
                ...state,
                fetching : false,
                fetched : true,
                hasMore : action.hasMore,
                current: action.current,
                data : action.payload
            }
        }
        case FETCH_CONTENT_ERROR : {
            return {
                ...state,
                fetching : false,
                fetched : false,
                error : action.error
            }
        }
        default:
            return state;
    }
}

const contentList = combineReducers({
    list
});

export default contentList;