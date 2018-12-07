import SbParamApi from '../api/SbParamApi';
import * as types from './actionTypes';

export function fetchData(currentTable) {
    return dispatch => {
        dispatch(fetchDataBegin());
        switch (currentTable) {
            case 'sbParams':
                return getSbParams(dispatch);
            default:
                return getDefaultTable(dispatch);
        }
    }
}

export const getSbParams = (dispatch) => {
    return SbParamApi.getAll()
                     .then(json => {
                         dispatch(fetchDataSuccess(json))
                     })
                     .catch(error => {
                         return dispatch(fetchDataFailure(error))
                     });
};

export const getDefaultTable = (dispatch) => {
    return getSbParams(dispatch);
};

export const fetchDataBegin = () => ({
    type: types.FETCH_DATA_BEGIN,
});

const fetchDataSuccess = (rows) => ({
    type: types.FETCH_DATA_SUCCESS,
    rows
});

const fetchDataFailure = (error) => ({
    type: types.FETCH_DATA_FAILURE,
    error,
});