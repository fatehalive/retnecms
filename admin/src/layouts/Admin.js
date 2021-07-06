import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

// core components
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';

// view components
import Index from '../views/Index';
import Posts from '../views/Posts';
import Users from '../views/Users';

// import routes from '../routes';

function Admin() {
    return (
        <Router>
            <div id="App">
                <AdminNavbar />
                <div className="content-wrapper">
                    <Sidebar />
                    <Switch>
                        {/* {routes.map((route, index) => {
                            <Route key={index} path={route.path} children={<route.component />} />
                        })} */}
                        <Route path="/admin/index" render={Index} />
                        <Route path="/admin/posts/index" render={Posts} />
                        <Route path="/admin/users/index" render={Users} />
                        <Redirect from="/" to="/admin/index" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
};

export default Admin;