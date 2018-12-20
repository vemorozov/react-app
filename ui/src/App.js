import React, { Component } from 'react';
// import './App.css';
import NavBar               from './components/AppBar';
import TableArea            from './components/TableArea';
import AuthDialog           from './components/AuthDialog';

class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <AuthDialog />
                <TableArea />
            </div>
        );
    }
}

export default App;
