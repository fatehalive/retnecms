function Header() {
    return (
        <>
        {/* <!-- HEADER START */}
        <nav className="top-toolbar navbar navbar-desktop flex-nowrap">

            {/* <!-- Navleft Start --> */}
            <ul className="navbar-nav nav-left">
                <li className="nav-item">
                    <a href="javascript:void(0)" data-toggle-state="content-menu-close">
                        <i className="icon dripicons-align-left"></i>
                    </a>
                </li>
            </ul>
            {/* <!-- Navleft end --> */}

            {/* <!-- Logo Start --> */}
            <ul className="site-logo">
                <li>
                    <a href="/admin">
                        <div className="logo">
                            <img src="./logo192.png" id="logo" style={{ width: "1em", height: "1em", objectFit: "cover" }} alt="" />
                        </div>
                        <h1 className="brand-text">Retne CMS</h1>
                    </a>
                </li>
            </ul>
            {/* <!-- Logo End --> */}

            {/* <!-- Navright Start --> */}
            <ul className="navbar-nav nav-right">
                <li className="nav-item dropdown">
                    <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
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
                        <a className="dropdown-item" href="/">
                            <i className="icon dripicons-mail"></i>Message<span className="badge badge-accent rounded-circle w-15 h-15 p-0 font-size-10">4</span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <i className="icon dripicons-user"></i>Profile
                        </a>
                        <a className="dropdown-item" href="/">
                            <i className="icon dripicons-gear"></i>Account Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/"><i className="icon dripicons-lock"></i>Lock Account</a>
                        <a className="dropdown-item" href="/"><i className="icon dripicons-lock-open"></i>Sign Out</a>
                    </div>
                </li>
            </ul>
            {/* <!-- Navright End --> */}
            
        </nav>
        {/* <!-- HEADER END */}
        </>
    )
}

export default Header;