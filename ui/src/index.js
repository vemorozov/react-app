import React          from 'react';
import { render }     from 'react-dom';
import App            from './App';
import configureStore from './store/configureStore';
import { Provider }   from 'react-redux';
// import './index.css';


const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
