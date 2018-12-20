import * as types        from './actionTypes';
import { login, signup } from './apiActions';

export const toggleLoggingIn = () => ({
    type: types.TOGGLE_LOGGING_IN,
});

export const handleAuth = (user) => (dispatch, state) => {
    dispatch(state().authForm.loggingIn === true ? login(user) : signup(user));
};