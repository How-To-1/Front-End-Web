import {combineReducers} from 'redux';

import userContribReducer from './userContribReducer';
import userViewerReducer from './userViewerReducer';

const rootReducer = combineReducers({
    userContribReducer,
    userViewerReducer,

})

export default rootReducer;