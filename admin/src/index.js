import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Layouts
import AdminLayout from './layouts/Admin';
import NotFound from './views/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminLayout}></Route>
        <Redirect from="/" to="/admin" />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);