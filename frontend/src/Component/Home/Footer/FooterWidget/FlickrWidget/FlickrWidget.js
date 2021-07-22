import images from './images'
import {Link} from 'react-router-dom'

const FlickrWidget = ()=>{
    return <div className="col-md-3">
                <div className="widget flickr-widget">
                    <h1>Flickr Photos</h1>
					<ul className="flickr-list">
                        {images.map((image,index)=>{
                            return <li key={index}>
                                <Link to="#"><img src={image.img} alt=""/></Link>
                            </li>
                        })}
                    </ul>
                    <Link to="#">View more photos...</Link>
                </div>
            </div>
}

export default FlickrWidget;