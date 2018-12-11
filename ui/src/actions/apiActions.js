import SbParamApi from '../api/SbParamApi';
import * as types from './actionTypes';

const DEFAULT_TABLE = 'sbParams';

export const fetchData = (currentTable) => {
    return dispatch => {
        dispatch(fetchDataBegin(currentTable));
        switch (currentTable) {
            case 'sbParams':
                return getSbParams(dispatch);
            default:
                return dispatch(fetchData(DEFAULT_TABLE));
        }
    }
};

export const commit = () => (dispatch, state) => {
    console.log(state());
    dispatch({
        type: types.PREPARE_COMMIT,
    });
    dispatch(commitAndUpdate(state().table.commitRequest, state().table.currentTable));
};

export const commitAndUpdate = (commitRequest, currentTable) => {
    console.log(commitRequest);
    return dispatch => {
        dispatch(commitBegin());
        switch (currentTable) {
            case 'sbParams':
                return SbParamApi.commit(commitRequest)
                                 .then(json => dispatch(commitSuccess(json)))
                                 .then(() => getSbParams(dispatch))
                                 .catch(error => dispatch(commitFailure(error)));
            default:
                return dispatch(commitFailure('No table selected'));
        }
    }
};

const getSbParams = (dispatch) => {
    return SbParamApi.getAll()
                     .then(json => {
                         dispatch(fetchDataSuccess(json))
                     })
                     .catch(error => {
                         return dispatch(fetchDataFailure(error))
                     });
};

const fetchDataBegin = (currentTable) => ({
    type: types.FETCH_DATA_BEGIN,
    currentTable,
});

const commitBegin = () => ({
    type: types.COMMIT_BEGIN,
});

const fetchDataSuccess = (rows) => ({
    type: types.FETCH_DATA_SUCCESS,
    rows,
});

const commitSuccess = () => ({
    type: types.COMMIT_SUCCESS,
});

const fetchDataFailure = (error) => ({
    type: types.FETCH_DATA_FAILURE,
    error,
});

const commitFailure = (error) => ({
    type: types.COMMIT_FAILURE,
    error,
});
