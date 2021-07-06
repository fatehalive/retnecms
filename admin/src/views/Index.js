function Index() {
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
                <h1>Ini Dashboard</h1>
            </section>
        </main>
    )
}

export default Index;