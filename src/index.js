import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
require('../src/ui-common/sass/home.scss');
require('../src/ui-common/sass/footer.scss');
require('../src/ui-common/sass/login.scss');
require('../src/ui-common/sass/confetti.scss');


ReactDOM.render(
            <Router>
                <App />
            </Router>
    , document.getElementById('root'));


serviceWorker.unregister();





