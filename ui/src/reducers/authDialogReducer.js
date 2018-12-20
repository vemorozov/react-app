import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

const authDialogReducer = (state = initialState.authForm, action) => {
    switch (action.type) {
        case types.TOGGLE_LOGGING_IN: {
            return {
                ...state,
                loggingIn: !state.loggingIn
            }
        }

        default:
            return state
    }
};

export default authDialogReducer