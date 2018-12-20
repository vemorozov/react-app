export default {
    main: {
        profileMenuAnchorEl: null,
        signedIn: false,
        profileMenuOpen: false,
        authDialogOpen: false
    },
    table: {
        currentTable: '',
        columns: [],
        booleanColumns: [],
        rows: [],
        selection: [],
        editingRowIds: [],
        addedRows: [],
        rowChanges: {},
        loading: false,
        error: null,
        commitRequest: {}
    },
    api: {
        loginRequest: {},
        signupRequest: {},
        commitRequest: {},
        fetching: false,
        error: null
    },
    authForm: {
        loggingIn: true,
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
}