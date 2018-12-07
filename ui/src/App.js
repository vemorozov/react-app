import React, { Component } from 'react';
// import Table                from './components/Table';
import './App.css';
import NavBar               from './components/NavBar';
import TableArea            from './components/TableArea';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <TableArea />
            </div>
        );
    }
}

export default App;
