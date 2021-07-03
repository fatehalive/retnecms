import { BrowserRouter, NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';

function Main() {
    let { path, url } = useRouteMatch();

    return (
        <BrowserRouter>
            {/*<!-- MENU SIDEBAR WRAPPER -->*/}
            <aside className="sidebar sidebar-left">
                <div className="sidebar-content">
                    <nav className="main-menu">
                        <ul className="nav metismenu">
                            {/*<!-- menu header -->*/}
                            <li className="sidebar-header"><span>NAVIGATION</span></li>

                            {/*<!-- menu item-1 -->*/}
                            <li>
                                <NavLink to={`${url}`}><i className="icon dripicons-meter"></i><span>Dashboard</span></NavLink>
                            </li>

                            {/*<!-- menu item-2 -->*/}
                            <li>
                                <NavLink to={`${url}/preview`}><i className="icon dripicons-preview"></i><span className="mr-3">Preview Site</span><i className="ml-5 la la-external-link"></i></NavLink>
                            </li>

                            {/*<!-- menu item-3 -->*/}
                            <li className="nav-dropdown">
                                <NavLink to={`${url}/posts`} className="has-arrow"><i className="icon dripicons-document-edit"></i><span>Posts</span></NavLink>
                                <ul className="collapse nav-sub">
                                    <li><NavLink to={`${url}/posts/published`}><span>Published</span></NavLink></li>
                                    <li><a href="/"><span>Draft</span></a></li>
                                    <li><a href="/"><span>Trash</span></a></li>
                                </ul>
                            </li>

                            {/*<!-- menu item-4 -->*/}
                            <li className="nav-dropdown">
                                <NavLink to={`${url}/users`}></NavLink>
                                <a href="/" className="has-arrow"><i className="icon dripicons-user-group"></i><span>Users</span></a>
                                <ul className="collapse nav-sub">
                                    <li><a href="/"><span>Staff</span></a></li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
            {/*<!-- END MENU SIDEBAR WRAPPER -->*/}

            <Switch>
                <Route path="/preview">
                    <DashboardPage />
                </Route>
                <Route path={`${url}/posts/published`} children={<PostPage />} />
            </Switch>
        </BrowserRouter>
    )
};

function DashboardPage() {
    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Dashboard</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="page-content container-fluid">
                
            </section>
        </main>
    )
};

function PostPage() {
    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Posts</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/">Posts</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Published</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="page-content container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <h5 class="card-header">Published Posts</h5>
                            <div class="card-body">
                                <table id="bs4-table" class="table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2008/11/28</td>
                                            <td>$162,700</td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2012/12/02</td>
                                            <td>$372,000</td>
                                        </tr>
                                        <tr>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2012/08/06</td>
                                            <td>$137,500</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;