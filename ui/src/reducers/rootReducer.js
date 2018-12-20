import { combineReducers } from 'redux';
import table               from './tableReducer';
import main                from './mainReducer'
import authForm            from './authDialogReducer'
import api                 from './apiReducer'

const rootReducer = combineReducers({
    table, main, authForm, api,
});

export default rootReducer;