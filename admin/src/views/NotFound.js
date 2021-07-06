import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator"><strong>Oops! - 404</strong></h1>
                    </div>
                </div>
            </header>
            <section className="page-content container-fluid">
                <h3>Tenang dan jangan panik, anda tidak tersesat.. Ini hanyalah kecelakaan yang menyenangkan.</h3>
                <Link to="/admin">Bantu saya kembali</Link>
            </section>
        </main>
    )
}

export default NotFound;