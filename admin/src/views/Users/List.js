function List() {
    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Users</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/">Users</a></li>
                                <li className="breadcrumb-item"><a href="/">List</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="page-content container-fluid">
                <div className="card">
                    <h5 className="card-header">Users List</h5>
                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="media">
                                    <img src="./assets/img/avatars/21.jpg" alt="" className="align-self-center mr-3 w-40 rounded-circle" />
                                    <div className="media-body">
                                        <p className="mb-0"><strong>Rebecca Harris</strong></p>
                                        <span><a href="/">rebbeca.harris@authenticgoods.co</a></span>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="media">
                                    <img src="assets/img/avatars/1.jpg" alt="" className="align-self-center mr-3 w-40 rounded-circle" />
                                    <div className="media-body">
                                        <p className="mb-0"><strong>Rebecca Harris</strong></p>
                                        <span><a href="/">rebbeca.harris@authenticgoods.co</a></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default List;