import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import getRouter from 'router';
import {Provider} from 'react-redux';
import store from './redux/store';

import '../mock/mock.js';

ReactDom.render(
    <Provider store={store}>
        <Router>
            {getRouter()}
        </Router>
    </Provider>,
    document.getElementById('app')
)
