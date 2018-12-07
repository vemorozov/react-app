import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (
            <div className='table-row-cell'>
                {this.props.value}
            </div>
        );
    }
}

export default Cell;