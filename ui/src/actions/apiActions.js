import SbParamApi                            from '../api/SbParamApi';
import * as types                            from './actionTypes';
import UserApi                               from '../api/UserApi';
import { checkIfSignedIn, closeProfileMenu } from './mainActions';

const DEFAULT_TABLE = 'sbParams';

export const fetchData = (currentTable) => dispatch => {
    dispatch(fetchDataBegin(currentTable));
    switch (currentTable) {
        case 'sbParams':
            return getSbParams(dispatch);
        default:
            return dispatch(fetchData(DEFAULT_TABLE));
    }
};

export const commit = () => (dispatch, state) => {
    dispatch({
        type: types.PREPARE_COMMIT
    });
    dispatch(commitAndUpdate(state().table.commitRequest, state().table.currentTable));
};

export const commitAndUpdate = (commitRequest, currentTable) => dispatch => {
    dispatch(commitBegin());
    switch (currentTable) {
        case 'sbParams':
            return SbParamApi.commit(commitRequest)
                             .then(json => dispatch(commitSuccess(json)))
                             .then(() => dispatch(fetchData(currentTable)))
                             .catch(error => dispatch(commitFailure(error)));
        default:
            return dispatch(commitFailure('No table selected'));
    }
};

export const login = user => (dispatch, state) => {
    dispatch({
        type: types.PREPARE_LOGIN_REQUEST,
        username: user.email,
        password: user.password
    });
    dispatch(loginBegin());
    return UserApi.login(state().api.loginRequest)
                  .then(json => dispatch(loginSuccess(json)))
                  .then(() => dispatch({type: types.CLOSE_AUTH_DIALOG}))
                  .then(() => dispatch({type: types.TOGGLE_SIGNED_IN}))
                  .then(() => dispatch(fetchData()))
                  .catch(error => dispatch(loginFailure(error)));
};

export const signup = () => (dispatch, state) => {
    dispatch({
        type: types.PREPARE_SIGNUP_REQUEST,
        email: state().authForm.email,
        password: state().authForm.password,
        firstName: state().authForm.firstName,
        lastName: state().authForm.lastName
    });
};

export const logout = () => dispatch => {
    UserApi.logout()
           .then((response) => dispatch(logoutSuccess(response)))
           .then(() => dispatch(closeProfileMenu()))
           .then(() => dispatch({type: types.TOGGLE_SIGNED_IN}))
           .then(() => dispatch(fetchData()))
           .catch(err => dispatch(logoutFailure(err)));
};

const getSbParams = (dispatch) => {
    return SbParamApi.getAll()
                     .then(json => {
                         dispatch(checkIfSignedIn());
                         return json;
                     })
                     .then(json => dispatch(fetchDataSuccess(json)))
                     .catch(error => {
                         return dispatch(fetchDataFailure(error))
                     });
};

const fetchDataBegin = (currentTable) => ({
    type: types.FETCH_DATA_BEGIN,
    currentTable
});

const commitBegin = () => ({
    type: types.COMMIT_BEGIN
});

const loginBegin = () => ({
    type: types.LOGIN_BEGIN
});

const fetchDataSuccess = (rows) => ({
    type: types.FETCH_DATA_SUCCESS,
    rows
});

const commitSuccess = () => ({
    type: types.COMMIT_SUCCESS
});

const loginSuccess = (response) => ({
    type: types.LOGIN_SUCCESS
});

const logoutSuccess = (response) => ({
    type: types.LOGOUT_SUCCESS
});

const loginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    error
});

const fetchDataFailure = (error) => ({
    type: types.FETCH_DATA_FAILURE,
    error
});

const commitFailure = (error) => ({
    type: types.COMMIT_FAILURE,
    error
});

const logoutFailure = () => ({
    type: types.LOGOUT_FAILURE
});

