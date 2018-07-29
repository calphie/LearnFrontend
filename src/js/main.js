import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducers.js';
import App from './container/app';
"use strict";

const store = createStore(reducer);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("content"));
