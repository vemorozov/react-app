import * as types   from '../actions/actionTypes';
import initialState from './initialState';

const tableReducer = (state = initialState.table, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case types.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                rows: action.rows,
                columns: Object.keys(action.rows[0]).map(key => ({
                    name: key, title: key,
                })),
            };
        }
        case types.FETCH_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
                rows: [],
                columns: [],
            }
        }
        case types.CHANGE_SELECTION: {
            return {
                ...state,
                selection: action.selection,
            }
        }
        default:
            return state;
    }
};

export default tableReducer;