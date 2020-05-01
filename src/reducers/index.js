import { combineReducers } from 'redux';

import selectionReducer from './selection_reducer';
import singleuserReducer from './singleuser_reducer';

let rootReducers = combineReducers({
    selectionReducer,
    singleuserReducer
})

export default rootReducers;