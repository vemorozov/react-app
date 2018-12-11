import React      from 'react';
import AppBar     from '@material-ui/core/AppBar';
import ToolBar    from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography variant='h6' color='inherit'>
                        React & Material UI CRUD Application
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
};

export default NavBar;