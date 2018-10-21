import { combineReducers } from 'redux';

import contentList, * as fromContentList from './contentList';

const rootReducer = combineReducers({
    contentList
});

//centralizing all selectors in single file
export const selectorHasMorePages = (state) => fromContentList.selectorHasMorePages( state.contentList);

export default rootReducer;