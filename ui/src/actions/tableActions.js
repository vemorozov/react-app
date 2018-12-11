import * as types from './actionTypes';

export const changeAddedRows = (addedRows) => ({
    type: types.CHANGE_ADDED_ROWS,
    addedRows,
});

export const changeEditingRowIds = (editingRowIds) => ({
    type: types.CHANGE_EDITING_ROW_IDS,
    editingRowIds,
});

export const changeRowChanges = (rowChanges) => ({
    type: types.CHANGE_ROW_CHANGES,
    rowChanges,
});
export const updateTable = (added, changed, deleted) => ({
    type: types.UPDATE_TABLE,
    added,
    changed,
    deleted,
});
