import * as types from './actionTypes';

export const openProfileMenu = (event) => ({
    type: types.OPEN_PROFILE_MENU,
    event
});

export const closeProfileMenu = () => ({
    type: types.CLOSE_PROFILE_MENU
});

export const openAuthDialog = () => ({
    type: types.OPEN_AUTH_DIALOG
});

export const closeAuthDialog = () => ({
    type: types.CLOSE_AUTH_DIALOG
});

export const checkIfSignedIn = () => ({
    type: types.CHECK_IF_SIGNED_IN
});