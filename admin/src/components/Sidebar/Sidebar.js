import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <aside className="sidebar sidebar-left">
            <div className="sidebar-content">
                <nav className="main-menu">
                    <ul className="nav metismenu">

                        <li className="sidebar-header"><span>NAVIGATION</span></li>

                        <li>
                            <NavLink to="/admin/index"><i className="icon dripicons-meter"></i><span>Dashboard</span></NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin/preview"><i className="icon dripicons-preview"></i><span className="mr-3">Preview Site</span><i className="ml-5 la la-external-link"></i></NavLink>
                        </li>

                        <li className="nav-dropdown">
                            <NavLink to="/admin/posts/index" className="has-arrow"><i className="icon dripicons-document-edit"></i><span>Posts</span></NavLink>
                            <ul className="collapse nav-sub">
                                <li><NavLink to="/admin/posts/index"><span>Published</span></NavLink></li>
                                <li><NavLink to="/admin/posts/draft"><span>Draft</span></NavLink></li>
                                <li><NavLink to="/admin/posts/trash"><span>Trash</span></NavLink></li>
                            </ul>
                        </li>

                        <li className="nav-dropdown">
                            <NavLink to="/admin/users/index" className="has-arrow"><i className="icon dripicons-user-group"></i><span>Users</span></NavLink>
                            <ul className="collapse nav-sub">
                                <li><NavLink to="/admin/users/index"><span>List</span></NavLink></li>
                                <li><NavLink to="/admin/users/roles"><span>Roles</span></NavLink></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    )
};

export default SideBar;