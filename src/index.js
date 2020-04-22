import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomRoutes from './Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
serviceWorker.unregister();
