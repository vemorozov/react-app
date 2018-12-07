import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchData }        from '../actions/fetchActions';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import '../style/Table.css';

class Table extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData(this.props.currentTable));
    }

    render() {
        console.log(this.props);
        const {rows, loading, error} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>
        } else if (loading) {
            return <div>Loading...</div>
        }
        return /*rows && rows.map(row => (
            <Row key={row.id} data={row} />
        ))*/
        <Grid />;
    }
}

const Row = props => (
    <div className='table-row'>
        {Object.keys(props.data)
               .map(key => <Cell key={key} data={props.data[key]}
                                 cellType={key} />)}
    </div>
);

const Cell = props => {
    const style = {
        width: props.cellType === 'id' ? '1rem' :
               props.cellType === 'code' ? '8rem' :
               props.cellType === 'description' ? '20rem' :
               '4rem',
    };

    return (
        <div className='table-row-cell' style={style}>{
            typeof props.data === 'object' ? <button>Click to expand</button> :
            typeof props.data === 'boolean' ? <selector>props.data</selector> ? 'true' : 'false' :
            props.data
        }
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentTable: state.table.currentTable,
    rows: state.table.rows,
    loading: state.table.loading,
    error: state.table.error,
});

export default connect(mapStateToProps)(Table);