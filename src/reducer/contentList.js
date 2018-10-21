import { combineReducers } from 'redux';

import {
    FETCH_CONTENT, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_ERROR,
    APPLY_FILTER, REMOVE_FILTER
} from '../constants/actionTypes';

const list = ( 
    state = {
    fetching: false,
    fetched: false,
    current : 0,
    data: {},
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

const filter = ( 
    state = {
        text : "",
}, action) => {
    switch (action.type) {
        case APPLY_FILTER : {
            return {
                ...state,
                text : action.payload
            }
        }
        case REMOVE_FILTER : {
            return {
                ...state,
                text : ""
            }
        }
        default:
            return state;
    }
}

const contentList = combineReducers({
    list,
    filter
});

/*This is a selector function that checks whether there 
is/are anymore page(s) to load
@param state : object
return boolean
*/
export const selectorHasMorePages = (state) => {
    let {data} = state.list;
    let noOfPages = Math.ceil(Number(data["total-content-items"]) / Number(data["page-size-requested"]));
    return Number(data["page-num-requested"]) < noOfPages;
}

export default contentList;