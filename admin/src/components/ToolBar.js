function ToolBar() {
    return (
        <nav className="top-toolbar navbar navbar-desktop flex-nowrap">
            
            <ul className="site-logo">
                <li>
                    {/* <--! START LOGO --> */}
                    <a href="index.html">
                        <div className="logo">
                            <img src="./logo192.png" id="logo" style={{width:"1.5em",height:"1.5em",objectFit:"cover"}} />
                        </div>
                        <h1 className="brand-text">Retne CMS</h1>
                    </a>
                    {/* <!-- END LOGO --> */}
                </li>
            </ul>
            <ul className="navbar-nav nav-right">
                <li className="nav-item dropdown">
                    <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/img/avatars/1.jpg" className="w-35 rounded-circle" alt="Albert Einstein" />
                    </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-accout">
                            <div className="dropdown-header pb-3">
                                <div className="media d-user">
                                    <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/1.jpg" alt="Albert Einstein" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-0">Albert Einstein</h5>
                                        <span>support@authenticgoods.co</span>
                                    </div>
                                </div>
                            </div>
                            <a className="dropdown-item" href="apps.messages.html">
                                <i className="icon dripicons-mail"></i>Message<span className="badge badge-accent rounded-circle w-15 h-15 p-0 font-size-10">4</span>
                            </a>
                            <a className="dropdown-item" href="pages.profile.html">
                                <i className="icon dripicons-user"></i>Profile
                            </a>
                            <a className="dropdown-item" href="pages.my-account.html">
                                <i className="icon dripicons-gear"></i>Account Settings
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="icon dripicons-lock"></i>Lock Account</a>
                            <a className="dropdown-item" href="auth.sign-in.html"><i className="icon dripicons-lock-open"></i>Sign Out</a>
                        </div>
                </li>
            </ul>
		</nav>
    )
}

export default ToolBar;