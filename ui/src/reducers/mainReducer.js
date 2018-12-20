import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

const mainReducer = (state = initialState.main, action) => {
    switch (action.type) {
        case types.OPEN_PROFILE_MENU: {
            return {
                ...state,
                profileMenuAnchorEl: action.event.currentTarget
            }
        }

        case types.CLOSE_PROFILE_MENU: {
            return {
                ...state,
                profileMenuAnchorEl: null
            }
        }

        case types.OPEN_AUTH_DIALOG: {
            return {
                ...state,
                authDialogOpen: true,
                profileMenuAnchorEl: null
            }
        }

        case types.CLOSE_AUTH_DIALOG: {
            return {
                ...state,
                authDialogOpen: false
            }
        }

        case types.TOGGLE_SIGNED_IN: {
            return {
                ...state,
                signedIn: !state.signedIn
            }
        }

        case types.CHECK_IF_SIGNED_IN: {
            return {
                ...state,
                signedIn: true  //todo: implement via api or something
            }
        }

        default:
            return state
    }
};

export default mainReducer;