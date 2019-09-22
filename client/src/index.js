import 'bootstrap'
import 'jquery'
import 'popper.js'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './ContextApi/UserContext'
import { ToysProvider } from './ContextApi/ToysContext'

ReactDOM.render(
    <UserProvider>
            <App />
    </UserProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
