import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// core components
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function Admin() {
    return (
        <Router>
            <div id="App">
                <Header />
                <Main />
            </div>
        </Router>
    )
};

export default Admin;