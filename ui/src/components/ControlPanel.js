import React, {Component} from 'react';
import {connect}          from "react-redux";
import { fetchData }      from '../actions/tableActions';

class ControlPanel extends Component {
    handleRefresh = (e) => {
        e.preventDefault();
        this.props.dispatch(fetchData());
    };

    render() {
        return (
            <div className="table-control-panel">
                <button>Create</button>
                <button onClick={this.handleRefresh}>Refresh</button>
                <button>Delete</button>
                <button>Undo</button>
                <button>Save</button>
            </div>
        );
    }
}

export default connect()(ControlPanel)