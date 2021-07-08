import { Redirect, Route, Switch } from 'react-router-dom';

// core components
import Sidebar from "../Sidebar/Sidebar";

// views components
import Index from '../../views/Index';
import Posts from '../../views/Posts';
import Users from '../../views/Users';

function AdminMain() {
    return (
        <div className="content-wrapper">
            <Sidebar />
            <Switch>
                <Route path="/admin/index">
                    <Index />
                </Route>
                <Route path="/admin/posts/index">
                    <Posts />
                </Route>
                <Route path="/admin/users/index">
                    <Users />
                </Route>
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </div>
    )
}

export default AdminMain;