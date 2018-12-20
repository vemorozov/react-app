import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

const tableReducer = (state = initialState.table, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN: {
            return {
                ...state,
                currentTable: action.currentTable,
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
                    name: key, title: key.charAt(0).toUpperCase() + key.substr(1),
                })),
                booleanColumns: Object.keys(action.rows[0]).filter(key => typeof action.rows[0][key] === 'boolean')
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
        case types.CHANGE_ADDED_ROWS: {
            return {
                ...state,
                addedRows: action.addedRows.map(row => (Object.keys(row).length ? row : {id: null})),
            }
        }

        case types.CHANGE_EDITING_ROW_IDS: {
            return {
                ...state,
                editingRowIds: action.editingRowIds,
            }
        }

        case types.CHANGE_ROW_CHANGES: {
            return {
                ...state,
                rowChanges: action.rowChanges,
            }
        }

        case types.UPDATE_TABLE: {
            let rows = state.rows;
            const {added, changed, deleted} = action;

            if (added) {
                // const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
                rows = [
                    ...rows,
                    ...added.map(row => ({
                        changeType: 'added',
                        ...row,
                    })),
                ];
            }
            if (changed) {
                rows = rows.map(row => changed[row.id] ? {...row, ...changed[row.id], changeType: 'edited'} : row);
            }
            if (deleted) {
                rows = rows.map(row => deleted[0] === row.id ? {...row, changeType: 'deleted'} : row);
            }

            return {
                ...state,
                rows: rows,
            }
        }

        case types.PREPARE_COMMIT: {
            const request = {
                post: [],
                delete: [],
            };

            state.rows.forEach(row => {
                const changeType = row.changeType;
                if (changeType === 'edited' || changeType === 'added') {
                    delete row.changeType;
                    request.post = [...request.post, row];
                }
                if (changeType === 'deleted') {
                    delete row.changeType;
                    request.delete = [...request.delete, row.id];
                }

            });

            return {
                ...state,
                commitRequest: request,
            }
        }

        case types.COMMIT_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }

        case types.COMMIT_SUCCESS: {
            return {
                ...state,
                loading: false,
            }
        }

        case types.COMMIT_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
                commitRequest: {},
            }
        }

        default:
            return state;
    }
};

export default tableReducer;