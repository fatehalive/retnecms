import { useSelector } from "react-redux";

function Index() {
    const whoisState = useSelector(state=>state.whois);

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
                <div className="row">
                    {whoisState.currentUser.user_profile
                        ? <h1>{`Selamat Datang, ${whoisState.currentUser.user_profile.name} ! Anda Login sebagai ${whoisState.currentUser.role.role}`}</h1>
                        : <h1>{`Selamat Datang, ${whoisState.currentUser.username} ! Anda Login sebagai ${whoisState.currentUser.role.role}`}</h1>
                    }
                    {/* <div className="col-lg-4">
                        <div className="card">
                            <h5 className="card-header">User list</h5>
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/21.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Rebecca Harris</strong></p>
                                                <span><a href="/">rebecca.harris@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/27.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Robert Norris</strong></p>
                                                <span><a href="/">robert.norris@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/47.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Shawna Cohen</strong></p>
                                                <span><a href="/">shawna.cohen@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/24.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Darrin	Todd</strong></p>
                                                <span><a href="/">darrin.todd@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/9.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Sheryl Wilson</strong></p>
                                                <span><a href="/">sheryl.wilson@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="align-self-center mr-3 w-40 rounded-circle" src="../assets/img/avatars/12.jpg" alt=" " />
                                            <div className="media-body">
                                                <p className="mb-0"><strong className="">Anita Chambers</strong></p>
                                                <span><a href="/">anita.chambers@authenticgoods.co</a></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <h5 className="card-header">Posts By Categories</h5>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Cras justo odio
                                        <span className="badge badge-primary badge-circle">14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Dapibus ac facilisis in
                                        <span className="badge badge-info badge-circle">2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Morbi leo risus
                                        <span className="badge badge-accent badge-circle">9</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Porta ac consectetur ac
                                        <span className="badge badge-success badge-circle">12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Vestibulum at eros
                                        <span className="badge badge-secondary badge-circle">27</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    )
}

export default Index;