import React, { Component } from 'react';
import Paper                from '@material-ui/core/Paper';
import {
    DataTypeProvider,
    EditingState,
    IntegratedPaging,
    PagingState,
} from '@devexpress/dx-react-grid';
import { connect }          from 'react-redux';
import {
    Grid,
    PagingPanel,
    Table,
    TableColumnVisibility,
    TableEditColumn,
    TableEditRow,
    TableHeaderRow,
}               from '@devexpress/dx-react-grid-material-ui';
import {
    fetchData,
    commit,
}               from '../actions/apiActions';
import {
    changeAddedRows,
    changeEditingRowIds,
    changeRowChanges,
    updateTable,
}               from '../actions/tableActions';
import Button   from '@material-ui/core/Button/Button';
import Chip     from '@material-ui/core/Chip/Chip';
import Select   from '@material-ui/core/Select/Select';
import Input    from '@material-ui/core/Input/Input';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const styles = {
    deleted: {
        backgroundColor: '#8d686c',
    },
    added: {
        backgroundColor: '#81b891',
    },
    edited: {
        backgroundColor: '#51adb8',
    },
    defaultRow: {
        backgroundColor: 'inherit',
    },
};

const TableRow = ({row, ...restProps}) => (
    <Table.Row
        {...restProps}
        onClick={() => alert(JSON.stringify(row))}
        style={{
            cursor: 'pointer',
            ...styles[row.changeType ? row.changeType.toLowerCase() : 'defaultRow'],
        }}
    />
);

const BooleanFormatter = ({ value }) => <Chip label={value ? 'Yes' : 'No'} />;

const BooleanEditor = ({ value, onValueChange }) => (
    <Select
        input={<Input />}
        value={value ? 'Yes' : 'No'}
        onChange={event => onValueChange(event.target.value === 'Yes')}
        style={{ width: '100%' }}
    >
        <MenuItem value="Yes">
            Yes
        </MenuItem>
        <MenuItem value="No">
            No
        </MenuItem>
    </Select>
);

const BooleanTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={BooleanFormatter}
        editorComponent={BooleanEditor}
        {...props}
    />
);

class TableArea extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.currentTable);
    }

    render() {
        const {rows, columns, booleanColumns, editingRowIds, addedRows, rowChanges} = this.props;

        return (
            <div>
                <Paper>
                    <Grid
                        rows={rows}
                        columns={columns}
                        getRowId={row => row.id}
                    >
                        <PagingState
                            defaultCurrentPage={0}
                            defaultPageSize={15}
                        />
                        <BooleanTypeProvider
                            for={booleanColumns}
                        />
                        <EditingState
                            editingRowIds={editingRowIds}
                            onEditingRowIdsChange={this.props.changeEditingRowIds}
                            rowChanges={rowChanges}
                            onRowChangesChange={this.props.changeRowChanges}
                            addedRows={addedRows}
                            onAddedRowsChange={this.props.changeAddedRows}
                            onCommitChanges={({added, changed, deleted}) => {
                                this.props.updateTable(added, changed, deleted)
                            }}
                            columnExtensions={
                                [{columnName: 'id', editingEnabled: false}]
                            }
                        />

                        <IntegratedPaging />

                        <Table
                            rowComponent={TableRow}
                        />
                        <TableHeaderRow />
                        <TableEditRow />
                        <TableEditColumn
                            showAddCommand={!addedRows.length}
                            showEditCommand
                            showDeleteCommand
                        />

                        <TableColumnVisibility
                            hiddenColumnNames={['toBeDeleted']}
                        />
                        <PagingPanel
                            pageSizes={[10, 20, 30, 0]}
                        />
                    </Grid>
                    <Button variant="contained" color="primary" onClick={this.props.commit}>
                        Commit
                    </Button>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentTable: state.table.currentTable,
    columns: state.table.columns,
    booleanColumns: state.table.booleanColumns,
    rows: state.table.rows,
    loading: state.table.loading,
    error: state.table.error,
    selection: state.table.selection,
    editingRowIds: state.table.editingRowIds,
    addedRows: state.table.addedRows,
    rowChanges: state.table.rowChanges,
    commitRequest: state.table.commitRequest,
});

const mapDispatchToProps = {
    fetchData, changeEditingRowIds, changeRowChanges, changeAddedRows, updateTable, commit,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableArea);