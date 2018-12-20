import React, { Component }                                  from 'react';
import { connect }                                           from 'react-redux';
import { closeProfileMenu, openAuthDialog, openProfileMenu } from '../actions/mainActions';
import IconButton                                            from '@material-ui/core/es/IconButton/IconButton';
import AccountCircle                                         from '@material-ui/icons/AccountCircle';
import Menu                                                  from '@material-ui/core/Menu';
import MenuItem                                              from '@material-ui/core/es/MenuItem/MenuItem';
import { logout }                                            from '../actions/apiActions';

class ProfileMenu extends Component {

    render() {
        const {
            signedIn,
            profileMenuAnchorEl,
            openProfileMenu,
            closeProfileMenu,
            openAuthDialog,
            logout
        } = this.props;

        return (
            <div>
                <IconButton
                    aria-owns={profileMenuAnchorEl ? 'profile-menu' : undefined}
                    aria-haspopup
                    color='inherit'
                    onClick={openProfileMenu}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id='profile-menu'
                    anchorEl={profileMenuAnchorEl}
                    open={Boolean(profileMenuAnchorEl)}
                    onClose={closeProfileMenu}
                >
                    {signedIn ? [
                        <MenuItem onClick={closeProfileMenu} key='profile'>
                            Profile
                        </MenuItem>,
                        <MenuItem onClick={closeProfileMenu} key='account'>
                            MyAccount
                        </MenuItem>,
                        <MenuItem onClick={logout} key='logout'>
                            Logout
                        </MenuItem>
                    ] : <MenuItem onClick={openAuthDialog}>
                            Log in/Sign up
                        </MenuItem>
                    }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        profileMenuAnchorEl: state.main.profileMenuAnchorEl,
        profileMenuOpen: state.main.profileMenuOpen,
        signedIn: state.main.signedIn
    })
};

const mapDispatcherToProps = {
    openProfileMenu, closeProfileMenu, openAuthDialog, logout
};

export default connect(mapStateToProps, mapDispatcherToProps)(ProfileMenu);