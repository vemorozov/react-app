import React, { Component }         from 'react';
import { TextField }                from '@material-ui/core';
import { connect }                  from 'react-redux';
import { handleAuth, toggleLoggingIn } from '../actions/authDialogActions';
import Button                       from '@material-ui/core/Button';
import DialogActions                from '@material-ui/core/DialogActions';
import DialogTitle                  from '@material-ui/core/es/DialogTitle';
import DialogContent                from '@material-ui/core/es/DialogContent';
import Dialog                       from '@material-ui/core/es/Dialog/Dialog';
import { closeAuthDialog }          from '../actions/mainActions';

const mapUser = (userRef) => {
    return {
        email: userRef.email.current.value,
        password: userRef.password.current.value
    }
};

class AuthDialog extends Component {
    userRef = {
        email: {},
        password: {},
        firstName: {},
        lastName: {}
    };

    render() {
        const {authDialogOpen, closeAuthDialog, loggingIn, toggleLoggingIn, handleAuth} = this.props;

        return (
            <Dialog
                open={authDialogOpen}
                onClose={closeAuthDialog}
                aria-labelledby='form-dialog-title'
                aria-modal='false'
                maxWidth='sm'
                fullWidth
            >
                <DialogTitle id='form-dialog-title'>{loggingIn ? 'LogIn' : 'Sign Up'}</DialogTitle>
                <DialogContent>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        handleAuth(mapUser(this.userRef))
                    }}>
                        <TextField
                            inputRef={this.userRef.email}
                            label='Email'
                            id='email'
                            key='email'
                            type='text'
                            autoComplete='email'
                            required
                            fullWidth
                            autoFocus
                        />
                        <TextField
                            inputRef={this.userRef.password}
                            label='Password'
                            id='password'
                            key='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            fullWidth
                        />
                        {!loggingIn && [
                            <TextField
                                label='First name'
                                id='firstName'
                                key='firstName'
                                inputRef={this.userRef.firstName}
                                autoComplete='first-name'
                                required
                                fullWidth
                                autoFocus
                            />,
                            <TextField
                                label='Last name'
                                id='lastName'
                                key='lastName'
                                inputRef={this.userRef.lastName}
                                autoComplete='last-name'
                                fullWidth
                            />
                        ]}
                        <DialogActions>
                            <Button
                                onClick={toggleLoggingIn}
                                color='primary'
                                className='grow'
                            >
                                {loggingIn ? 'Sign up' : 'Log in'}
                            </Button>
                            <Button
                                type='submit'
                                color='primary'
                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }
}

const mapStateToProps = state => ({
    loggingIn: state.authForm.loggingIn,
    email: state.authForm.email,
    password: state.authForm.password,
    firstName: state.authForm.firstName,
    lastName: state.authForm.lastName,
    authDialogOpen: state.main.authDialogOpen
});

const mapDispatchToProps = {
    toggleLoggingIn, handleAuth, closeAuthDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDialog);