// import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// sibling component
import Sidebar from "../Sidebar/Sidebar";
// const Sidebar = React.lazy(() => import('../Sidebar/Sidebar'));

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
// const Index = React.lazy(() => import('../../views/Index'));
// const UsersCreate = React.lazy(() => import('../../views/Users/Create'));
// const UsersList = React.lazy(() => import('../../views/Users/List'));
// const UsersSingle = React.lazy(() => import('../../views/Users/Single'));
// const UsersUpdate = React.lazy(() => import('../../views/Users/Update'));
// const RolesCreate = React.lazy(() => import('../../views/Roles/Create'));
// const RolesList = React.lazy(() => import('../../views/Roles/List'));
// const RolesSingle = React.lazy(() => import('../../views/Roles/Single'));
// const RolesUpdate = React.lazy(() => import('../../views/Roles/Update'));
// const CategoriesCreate = React.lazy(() => import('../../views/Categories/Create'));
// const CategoriesList = React.lazy(() => import('../../views/Categories/List'));
// const CategoriesSingle = React.lazy(() => import('../../views/Categories/Single'));
// const CategoriesUpdate = React.lazy(() => import('../../views/Categories/Update'));
// const PostsCreate = React.lazy(() => import('../../views/Posts/Create'));
// const PostsList = React.lazy(() => import('../../views/Posts/List'));
// const PostsSingle = React.lazy(() => import('../../views/Posts/Single'));
// const PostsUpdate = React.lazy(() => import('../../views/Posts/Update'));


import { CategoriesUIProvider } from '../Context/CategoriesContext'

import '../../assets/ReactToastify.css';


function Main() {
    return (
        // <React.Suspense fallback={<div>Loading...</div>}>
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
                    <CategoriesUIProvider>
                        <CategoriesList />
                    </CategoriesUIProvider>
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
                <Redirect path='/admin' to='/admin/index'></Redirect>
                {/* <Route path="/admin/index" component={Index}></Route>
                    <Route path="/admin/posts/index" component={PostsList}></Route>
                    <Route path="/admin/posts/single/:postId" component={PostsSingle}></Route>
                    <Route path="/admin/posts/create" component={PostsCreate}></Route>
                    <Route path="/admin/posts/update/:postId" component={PostsUpdate}></Route>
                    <Route path="/admin/users/index" component={UsersList}></Route>
                    <Route path="/admin/users//single/:userId" component={UsersSingle}></Route>
                    <Route path="/admin/users/create" component={UsersCreate}></Route>
                    <Route path="/admin/users/update/:userId" component={UsersUpdate}></Route>
                    <Route path="/admin/roles/index" component={RolesList}></Route>
                    <Route path="/admin/roles/single/:roleId" component={RolesSingle}></Route>
                    <Route path="/admin/roles/create" component={RolesCreate}></Route>
                    <Route path="/admin/roles//update/:roleId" component={RolesUpdate}></Route>
                    <Route path="/admin/categories/index" component={CategoriesList}></Route>
                    <Route path="/admin/categories/single/:categoryId" component={CategoriesSingle}></Route>
                    <Route path="/admin/categories/create" component={CategoriesCreate}></Route>
                    <Route path="/admin/categories/update/:categoryId" component={CategoriesUpdate}></Route> */}
            </Switch>
        </div>
        // </React.Suspense>
    )
}

export default Main;