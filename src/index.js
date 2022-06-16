import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const container = document.getElementById('root');
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
