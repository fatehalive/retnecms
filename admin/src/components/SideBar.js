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
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-meter"></i><span>Dashboard</span></a>
                                <ul className="collapse nav-sub" aria-expanded="true">
                                    <li><a href="index.html"><span>Default</span></a></li>
                                    <li><a href="dashboard.analytics.html"><span>Analytics</span></a></li>
                                    <li><a href="dashboard.financials.html"><span>Financials</span></a></li>
                                    <li><a href="dashboard.ecommerce.html"><span>Ecommerce</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-article"></i><span>Page Layouts</span></a>
                                <ul className="collapse in nav-sub" aria-expanded="false">
                                    <li className="active"><a href="layout.blank.html"><span>Blank Page</span></a></li>
                                    <li><a href="layout.1-column-wide.html"><span>1 Column Wide</span></a></li>
                                    <li><a href="layout.1-column-boxed.html"><span>1 Column Boxed</span></a></li>
                                    <li><a href="layout.tabbed-header.html"><span>Tabbed Header</span></a></li>
                                    <li><a href="layout.left-sidebar.html"><span>Left Sidebar</span></a></li>
                                    <li><a href="layout.right-sidebar.html"><span>Right Sidebar</span></a></li>
                                    <li><a href="layout.left-right-sidebars.html"><span>Left &amp; Right Sidebars</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-browser"></i><span>Custom Pages</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="pages.profile.html"><span>Profile</span></a></li>
                                    <li><a href="pages.help-center.html"><span>Help Center</span></a></li>
                                    <li><a href="pages.search.html"><span>Search</span></a></li>
                                    <li><a href="pages.pricing-tables.html"><span>Pricing Tables</span></a></li>
                                    <li><a href="pages.my-account.html"><span>My Account</span></a></li>
                                    <li><a href="pages.invoice-template.html"><span>Invoice Template</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-view-thumb"></i><span>Cards</span></a>
                                <ul className="collapse nav-sub">
                                    <li><a href="cards.basic-content-types.html"><span>Content Types</span></a></li>
                                    <li><a href="cards.basic-layouts.html"><span>Layouts</span></a></li>
                                    <li><a href="cards.basic-navigation.html"><span>Navigation</span></a></li>
                                    <li><a href="cards.basic-actions.html"><span>Actions</span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-header"><span>UI ELEMENTS</span></li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-jewel"></i><span>UI Kit</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="ui.alerts.html"><span>Alerts</span></a></li>
                                    <li><a href="ui.badges.html"><span>Badges</span></a></li>
                                    <li><a href="ui.buttons.html"><span>Buttons</span></a></li>
                                    <li><a href="ui.colors.html"><span>Colors</span></a></li>
                                    <li><a href="ui.icons.html"><span>Icons</span></a></li>
                                    <li><a href="ui.list-groups.html"><span>List Groups</span></a></li>
                                    <li><a href="ui.progress-bars.html"><span>Progress Bars</span></a></li>
                                    <li><a href="ui.preloaders.html"><span>Preloaders</span></a></li>
                                    <li><a href="ui.typography.html"><span>Typography</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-stack"></i><span>Components</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="components.carousels.html"><span>Carousels</span></a></li>
                                    <li><a href="components.tabs-pills.html"><span>Tabs &amp; Pills</span></a></li>
                                    <li><a href="components.dropdowns.html"><span>Dropdowns</span></a></li>
                                    <li><a href="components.modals.html"><span>Modals</span></a></li>
                                    <li><a href="components.sweetalert2.html"><span>SweetAlert2</span></a></li>
                                    <li><a href="components.scrollable.html"><span>Scrollable</span></a></li>
                                    <li><a href="components.tooltips-popovers.html"><span>Tooltips &amp; Popovers</span></a></li>
                                    <li><a href="components.ui-blocking.html"><span>UI Blocking</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-graph-bar"></i><span>Charts</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="charts.chartjs.html"><span>Chart.js</span></a></li>
                                    <li><a href="charts.c3charts.html"><span>C3 Charts</span></a></li>
                                    <li><a href="charts.morrisjs.html"><span>Morris.js</span></a></li>
                                    <li><a href="charts.chartist.html"><span>Chartist</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-to-do"></i><span>Forms</span></a>
                                <ul className="collapse nav-sub">
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#">Basic Elements</a>
                                        <ul className="collapse nav-sub">
                                            <li><a href="forms.basic-inputs.html"><span>Basic Inputs</span></a></li>
                                            <li><a href="forms.checkbox-radio.html"><span>Checkbox &amp; Radio</span></a></li>
                                            <li><a href="forms.input-groups.html"><span>Input Groups</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#">Form Layouts</a>
                                        <ul className="collapse nav-sub">
                                            <li><a href="forms.form-groups.html"><span>Form Groups</span></a></li>
                                            <li><a href="forms.form-grid.html"><span>Form Grid</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#">Advanced Elements</a>
                                        <ul className="collapse nav-sub">
                                            <li><a href="forms.input-mask.html"><span>Input Mask</span></a></li>
                                            <li><a href="forms.select2.html"><span>Select2</span></a></li>
                                            <li><a href="forms.range-sliders.html"><span>Range Sliders</span></a></li>
                                            <li><a href="forms.switches.html"><span>Switches</span></a></li>
                                            <li><a href="forms.date-pickers.html"><span>Date Pickers</span></a></li>
                                            <li><a href="forms.dropzone.html"><span>Dropzone</span></a></li>
                                            <li><a href="forms.wysiwyg.html"><span>WYSIWYG</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#">Form Validation</a>
                                        <ul className="collapse nav-sub">
                                            <li><a href="forms.basic-validation.html"><span>Basic Validation</span></a></li>
                                            <li><a href="forms.jquery-validation.html"><span>jQuery	Validation</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#">Form Wizards</a>
                                        <ul className="collapse nav-sub">
                                            <li><a href="forms.vertical-wizard.html"><span>Vertical Wizard</span></a></li>
                                            <li><a href="forms.horizontal-wizard.html"><span>Horizontal	Wizard</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-blog"></i><span>Tables</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="tables.basic.html"><span>Basic Tables</span></a></li>
                                    <li><a href="tables.data.html"><span>Data Tables</span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-header"><span>APP VIEWS</span></li>
                            <li><a href="apps.mail.html"><i className="icon dripicons-mail"></i><span>Mail</span></a></li>
                            <li><a href="apps.messages.html"><i className="icon dripicons-message"></i><span>Messages</span></a></li>
                            <li><a href="apps.contacts.html"><i className="icon dripicons-archive"></i><span>Contacts</span></a></li>
                            <li><a href="apps.calendar.html"><i className="icon dripicons-calendar"></i><span>Calendar</span></a></li>
                            <li className="sidebar-header"><span>EXTRAS</span></li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-lock"></i><span>Authentication</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="auth.sign-in.html"><span>Sign In</span></a></li>
                                    <li><a href="auth.register.html"><span>Register</span></a></li>
                                    <li><a href="auth.forgot-password.html"><span>Forgot Password</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon dripicons-folder"></i><span>Menu Levels</span></a>
                                <ul className="collapse nav-sub" aria-expanded="false">
                                    <li><a href="javascript:;">Level 1.1</a></li>
                                    <li><a href="javascript:;">Level 1.2</a></li>
                                    <li className="nav-dropdown">
                                        <a className="has-arrow" href="#" aria-expanded="false">Level 1.3</a>
                                        <ul className="collapse nav-sub" aria-expanded="false">
                                            <li><a href="javascript:;">Level 2.1</a></li>
                                        </ul>
                                    </li>
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