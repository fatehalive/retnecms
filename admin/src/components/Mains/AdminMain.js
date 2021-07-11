import { Redirect, Route, Switch } from 'react-router-dom';

// sibling component
import Sidebar from "../Sidebar/Sidebar";

// views components
import Index from '../../views/Index';
import UsersCreate from '../../views/Users/Create';
import UsersList from '../../views/Users/List';
import UsersSingle from '../../views/Users/Single';
import UsersUpdate from '../../views/Users/Update';
import RolesCreate from '../../views/Roles/Create';
import RolesList from '../../views/Roles/List';
import RolesSingle from '../../views/Roles/Single';
import RolesUpdate from '../../views/Roles/Update';
import CategoriesCreate from '../../views/Categories/Create';
import CategoriesList from '../../views/Categories/List';
import CategoriesSingle from '../../views/Categories/Single';
import CategoriesUpdate from '../../views/Categories/Update';
import PostsCreate from '../../views/Posts/Create';
import PostsList from '../../views/Posts/List';
import PostsSingle from '../../views/Posts/Single';
import PostsUpdate from '../../views/Posts/Update';

function AdminMain() {
    return (
        <div className="content-wrapper">
            <Sidebar />
            <Switch>
                <Route path="/admin/index">
                    <Index />
                </Route>
                <Route path="/admin/posts/index">
                    <PostsList />
                </Route>
                <Route path="/admin/posts/single/:postId">
                    <PostsSingle />
                </Route>
                <Route path="/admin/posts/create">
                    <PostsCreate />
                </Route>
                <Route path="/admin/posts/update/:postId">
                    <PostsUpdate />
                </Route>
                <Route path="/admin/users/index">
                    <UsersList />
                </Route>
                <Route path="/admin/users/single/:userId">
                    <UsersSingle />
                </Route>
                <Route path="/admin/users/create">
                    <UsersCreate />
                </Route>
                <Route path="/admin/users/update/:userId">
                    <UsersUpdate />
                </Route>
                <Route path="/admin/roles/index">
                    <RolesList />
                </Route>
                <Route path="/admin/roles/single/:roleId">
                    <RolesSingle />
                </Route>
                <Route path="/admin/roles/create">
                    <RolesCreate />
                </Route>
                <Route path="/admin/roles/update/:roleId">
                    <RolesUpdate />
                </Route>
                <Route path="/admin/categories/index">
                    <CategoriesList />
                </Route>
                <Route path="/admin/categories/single/:categoryId">
                    <CategoriesSingle />
                </Route>
                <Route path="/admin/categories/create">
                    <CategoriesCreate />
                </Route>
                <Route path="/admin/categories/update/:categoryId">
                    <CategoriesUpdate />
                </Route>
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </div>
    )
}

export default AdminMain;