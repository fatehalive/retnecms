import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// core components
import Header from '../components/Header/Header';
import AdminMain from '../components/Mains/AdminMain';
// import Sidebar from '../components/Sidebar/Sidebar';

// view components
// import Index from '../views/Index';
// import Posts from '../views/Posts';
// import Users from '../views/Users';

// import routes from '../routes';

function Admin() {
    return (
        <Router>
            <div id="App">
                <Header />
                <AdminMain />
            </div>
        </Router>
    )
};

export default Admin;