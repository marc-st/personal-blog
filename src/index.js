import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
