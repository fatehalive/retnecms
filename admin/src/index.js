import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
// Layouts
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthRoutes from './components/PrivateRoute/AuthRoutes';
// import NotFound from './views/NotFound';

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