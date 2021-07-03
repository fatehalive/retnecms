import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <>
            {/*<!-- MENU SIDEBAR WRAPPER -->*/}
            <aside className="sidebar sidebar-left">
                <div className="sidebar-content">
                    <nav className="main-menu">
                        <ul className="nav metismenu">
                            {/*<!-- start menu header -->*/}
                            <li className="sidebar-header"><span>NAVIGATION</span></li>
                            {/*<!-- end menu header -->*/}

                            {/*<!-- start menu item-1 -->*/}
                            <li>
                                <NavLink to="/admin"><i className="icon dripicons-meter"></i><span>Dashboard</span></NavLink>
                            </li>
                            {/*<!-- end menu item-1 -->*/}


                            <li>
                                <NavLink to="/"><i className="icon dripicons-preview"></i><span className="mr-3">Preview Site</span><i className="ml-5 la la-external-link"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to="/tes"><i className="icon dripicons-document-new"></i><span>Tes</span></NavLink>
                            </li>
                            {/*<!-- start menu item-2 -->*/}
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="/"><i className="icon dripicons-document-edit"></i><span>Posts</span></a>
                                <ul className="collapse nav-sub">
                                    <li><a href="/"><span>Published</span></a></li>
                                    <li><a href="/"><span>Draft</span></a></li>
                                    <li><a href="/"><span>Trash</span></a></li>
                                </ul>
                            </li>
                            {/*<!-- end menu item-2 -->*/}

                            {/*<!-- start menu item-3 -->*/}
                            <li className="nav-dropdown">
                                <a href="/" className="has-arrow"><i className="icon dripicons-user-group"></i><span>Users</span></a>
                                <ul className="collapse nav-sub">
                                    <li><a href="/"><span>Staff</span></a></li>
                                </ul>
                            </li>
                            {/*<!-- end menu item-3 -->*/}
                        </ul>
                    </nav>
                </div>
            </aside>
            {/*<!-- END MENU SIDEBAR WRAPPER -->*/}
        </>
    )
};

export default SideBar;