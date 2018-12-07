import React, { Component }                                                   from 'react';
import Paper                                                                  from '@material-ui/core/Paper';
import { IntegratedPaging, IntegratedSelection, PagingState, SelectionState } from '@devexpress/dx-react-grid';
import { connect }                                                            from 'react-redux';
import {
    Grid,
    PagingPanel,
    Table,
    TableHeaderRow,
    TableSelection,
}                                                                             from '@devexpress/dx-react-grid-material-ui';
import { fetchData }                                                          from '../actions/fetchActions';
import { changeSelection }                                                    from '../actions/selectionActions';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class TableArea extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData(this.props.currentTable));
    }

    render() {
        const {rows, columns, selection} = this.props;

        console.log(rows);
        console.log(columns);

        return (
            <div>
                <Paper>
                    <Grid
                        rows={rows}
                        columns={columns}
                    >
                        <PagingState
                            defaultCurrentPage={0}
                            pageSize={6}
                        />
                        <SelectionState
                            selection={selection}
                            onSelectionChange={(selection) => {
                                this.props.dispatch(changeSelection(selection))
                            }}
                        />
                        <IntegratedPaging />
                        <IntegratedSelection />
                        <Table />
                        <TableHeaderRow />
                        <TableSelection showSelectAll />
                        <PagingPanel />
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentTable: state.table.currentTable,
    columns: state.table.columns,
    rows: state.table.rows,
    loading: state.table.loading,
    error: state.table.error,
    selection: state.table.selection,
});

export default connect(mapStateToProps)(TableArea);