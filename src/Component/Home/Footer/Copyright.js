import {Link} from 'react-router-dom'

const CopyRight = ()=>{
    return <div className="footer-last-line">
    <div className="row">
        <div className="col-md-6">
            <p>&copy; COPYRIGHT 2015 hotmagazine.com</p>
        </div>
        <div className="col-md-6">
            <nav className="footer-nav">
                <ul>
                    <li><Link to="index.html">Home</Link></li>
                    <li><Link to="index.html">Purchase Theme</Link></li>
                    <li><Link to="about.html">About</Link></li>
                    <li><Link to="contact.html">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
}
export default CopyRight