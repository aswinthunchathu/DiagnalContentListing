import {
    FETCH_CONTENT, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_ERROR,
    APPLY_FILTER, REMOVE_FILTER, FETCH_CACHED_CONTENT
} from '../constants/actionTypes';
import {API, query_page} from '../constants/api';
import {ERROR_MESSAGE, CACHE_CONTENT_LIST} from '../constants';
import {cacheMapedData, shouldfetchFromServer} from '../util';

/*This function checks whether there 
is/are anymore page(s) to load
@param object
return boolean
*/
const shouldFetchMore = (data) => {
    let noOfPages = Math.ceil(Number(data["total-content-items"])/ Number(data["page-size-requested"]));
    return Number(data["page-num-requested"]) < noOfPages;
}

/*This function merges two specific arrays
@param object
@param object
return array
*/
const mergeContent = (previous, current) => {
    if(Object.keys(previous).length === 0){
        return Object.assign({}, previous, current)
    }
    current["content-items"].content = [].concat(previous["content-items"].content, current["content-items"].content);
    return current;
}

/*This function fetch content from API
and dispatch actions*/
export const fetchContent = () => (dispatch, getState) => {
    
    dispatch({type : FETCH_CONTENT});
    
    const {list} = getState().contentList;

    //Check if data is present in cache
    const shouldFetchfromServer = shouldfetchFromServer(CACHE_CONTENT_LIST, list.current + 1);

    if(shouldFetchfromServer === true){
        API.get(query_page(list.current + 1)).then(
            res => {
                let {page : data} = res.data;
                let mergedData = mergeContent(list.data, data);
                cacheMapedData(CACHE_CONTENT_LIST, list.current + 1, mergedData);
                dispatch({ 
                    type: FETCH_CONTENT_SUCCESS, 
                    payload:  mergedData, 
                    hasMore : shouldFetchMore(data), 
                    current : list.current + 1
                });
            }, 
            err =>  dispatch({ type: FETCH_CONTENT_ERROR, error: {
                actual : err.message,
                maskWith : ERROR_MESSAGE
            }})
        )
    }else{
        dispatch({ 
            type: FETCH_CACHED_CONTENT, 
            payload:  shouldFetchfromServer, 
            current : list.current + 1,
            hasMore : shouldFetchMore(shouldFetchfromServer)
        });
    }
}

/*This function is triggered on every search*/
export const onSearch = (text) => (dispatch) => {
    text !== "" ? dispatch({type : APPLY_FILTER, payload: text}) : dispatch({type : REMOVE_FILTER})
}
