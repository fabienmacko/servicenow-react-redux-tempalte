import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from './store';
import ReactDOM from 'react-dom';
import App from './containers/App';
import axios from 'axios';

axios.defaults.headers.put["Content-Type"] = "application/json";

if (process.env.NODE_ENV === 'development') {
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD

    axios.defaults.auth = {
        username,
        password
    }
} else {
    axios.defaults.headers["X-UserToken"] = window.servicenowUserToken;
}

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
,
document.getElementById('root'));