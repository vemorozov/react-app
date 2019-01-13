import initialState from '../store/initialState';
import * as types   from '../actions/actionTypes'

const apiReducer = (state = initialState.api, action) => {
    switch (action.type) {
        case types.PREPARE_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: {
                    username: action.username,
                    password: action.password
                }

            }
        }

        case types.PREPARE_SIGNUP_REQUEST: {
            return {
                ...state,
                signupRequest: {
                    email: action.email,
                    password: action.password,
                    firstName: action.firstName,
                    lastName: action.lastName
                }

            }
        }


        case types.LOGIN_BEGIN: {
            return {
                ...state,
                fetching: true,
                error: null
            }

        }

        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                fetching: false,
                error: null
            }

        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        }

        case types.LOGOUT_FAILURE: {
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        }

        case types.LOGOUT_SUCCESS: {
            return {
                ...state,
                fetching: false,
                error: null
            }
        }

        default:
            return state
    }
};

export default apiReducer