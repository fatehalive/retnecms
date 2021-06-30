import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>Oops! - 404</h1>
            <h3>Horee anda menemukan halaman 404 kami. Tenang dan jangan panik, anda tidak tersesat.. Ini hanyalah kecelakaan yang menyenangkan.</h3>
            <Link to="/">Bantu saya kembali</Link>
        </div>
    )
}

export default NotFound;