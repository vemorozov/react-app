import * as types from './actionTypes';

export const changeSelection = (selection) => ({
    type: types.CHANGE_SELECTION,
    selection,
});