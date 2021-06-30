function SideBar() {
    return (
        <>
            {/*<!-- MENU SIDEBAR WRAPPER -->*/}
            <aside className="sidebar sidebar-left">
                <div className="sidebar-content">
                    <nav className="main-menu">
                        <ul className="nav metismenu">
                            <li className="sidebar-header"><span>NAVIGATION</span></li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="/" aria-expanded="false"><i className="icon dripicons-meter"></i><span>Dashboard</span></a>
                                <ul className="collapse nav-sub" aria-expanded="true">
                                    <li><a href="/"><span>Dashboard</span></a></li>
                                    <li><a href="/"><span>Preview Site</span><i className="zmdi zmdi-open-in-new zmdi-hc-fw"></i></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="/" aria-expanded="false"><i className="la la-edit"></i><span>Posts</span></a>
                                <ul className="collapse in nav-sub" aria-expanded="false">
                                    <li className="active"><a href="/"><span>Published</span></a></li>
                                    <li><a href="/"><span>Draft</span></a></li>
                                    <li><a href="/"><span>Trash</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a href="/" className="has-arrow" aria-expanded="false"><i className="la la-users"></i><span>Users</span></a>
                                <ul className="collapse in nav-sub" aria-expanded="false">
                                    <li><a href="/"><span>Staff</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            {/*<!-- END MENU SIDEBAR WRAPPER -->*/}
        </>
    )
};

export default SideBar;