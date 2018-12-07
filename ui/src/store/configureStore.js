import { applyMiddleware, createStore } from 'redux';
import rootReducer                      from '../reducers/rootReducer.js';
import thunk                            from 'redux-thunk';
import { createLogger }                 from 'redux-logger';

export default function configureStore() {
    const logger = createLogger();
    return createStore(
        rootReducer,
        applyMiddleware(thunk, logger),
    );
}