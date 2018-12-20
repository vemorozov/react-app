import React, { Component } from 'react';
import AppBarMaterial       from '@material-ui/core/AppBar';
import ToolBar              from '@material-ui/core/Toolbar';
import Typography           from '@material-ui/core/Typography';
import IconButton           from '@material-ui/core/es/IconButton/IconButton';
import MenuIcon             from '@material-ui/icons/Menu'
import ProfileMenu          from './ProfileMenu';
import { withStyles }       from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class AppBar extends Component {


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBarMaterial position='static'>
                    <ToolBar>
                        <IconButton className={classes.menuButton} color='inherit' aria-label='Open drawer'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' className={classes.grow}>
                            React & Material UI CRUD Application
                        </Typography>
                        <ProfileMenu />
                    </ToolBar>
                </AppBarMaterial>
            </div>
        );
    }
}

export default withStyles(styles)(AppBar);