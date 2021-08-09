import { useContext } from 'react';
import authservice from "../../services/auth-service";

import { ProfileContext } from '../Context/ProfileContext';

function Header() {
    const profile = useContext(ProfileContext);

    const handleLogout = (e) => {
        e.preventDefault();
        authservice.logout();
        window.location.reload()
    };

    return (
        <nav className="top-toolbar navbar navbar-desktop flex-nowrap">

            <ul className="navbar-nav nav-left">
                <li className="nav-item">
                    <a href data-toggle-state="content-menu-close">
                        <i className="icon dripicons-align-left"></i>
                    </a>
                </li>
            </ul>

            <ul className="site-logo">
                <li>
                    <a href="/admin">
                        <div className="logo">
                            <img src="/logo192.png" id="logo" style={{ width: "1em", height: "1em", objectFit: "cover" }} alt="" />
                        </div>
                        <h1 className="brand-text">Retne CMS</h1>
                    </a>
                </li>
            </ul>

            <ul className="navbar-nav nav-right">
                <li className="nav-item dropdown">
                    <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
                        <img src="/assets/img/avatars/1.jpg" className="w-35 rounded-circle" alt={'props.data.username'} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-accout">
                        <div className="dropdown-header pb-3">
                            <div className="media d-user">
                                <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/1.jpg" alt="Albert Einstein" />
                                <div className="media-body">
                                    <h5 className="mt-0 mb-0">{'props.data.username'}</h5>
                                    <span>{'props.data.email'}</span>
                                </div>
                            </div>
                        </div>
                        <a className="dropdown-item" href="/">
                            <i className="icon dripicons-user"></i>Profile
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={e => handleLogout(e)}><i className="icon dripicons-lock-open"></i>Sign Out</a>
                    </div>
                </li>
            </ul>

        </nav>
    )
}

export default Header;