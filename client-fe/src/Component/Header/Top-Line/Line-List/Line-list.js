import {Link} from 'react-router-dom'
import {Svg} from './svg-data'

const LineList = ()=>{
    return <ul className="top-line-list">
        <li>
			<span className="city-weather">London, United Kingdom</span>
                <Svg/>
			<span className="cel-temperature">+7</span>
		</li>
			<li>
                <span className="time-now">Thursday 8 January 2015 / 21:20</span>
            </li>
			<li>
                <Link to='#'>Log In</Link>
            </li>
			<li>
                <Link to="/contact.html">Contact</Link>
            </li>
			<li>
                <Link to="#">Purchase Theme</Link>
            </li>
    </ul>
}


export default LineList;