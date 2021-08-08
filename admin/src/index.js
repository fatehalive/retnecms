import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
// redux
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
// Layouts
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthRoutes from './components/PrivateRoute/AuthRoutes';
import authHeader from './services/auth-header.js';
// import NotFound from './views/NotFound';

let x = authHeader();
axios.defaults.headers.common['Authorization'] = x.Authorization;

axios.interceptors.request.use(request => {
    // Edit request config
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
                <AuthRoutes path="/auth/login" component={Auth}></AuthRoutes>
                <Redirect from="/" to="/admin/index" />
                {/* <Route component={NotFound}></Route> */}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);