import {Link} from 'react-router-dom'
import NavTravelArticle from './NavTravelArticle/NavTravelArticle'
// DATA DUMMY YG SAMA
import Data from '../Data'

const NavTravel = ()=>{
    return <li>
        <Link to="#" className="travel">Travel</Link>
        <div className="megadropdown">
            <div className="container">
                <div className="inner-megadropdown travel-dropdown">
                    <div className="owl-wrapper">
                        <h1>Latest Posts</h1>
                        <div class="owl-carousel" data-num="4">
                        {Data.map((Data)=>{
                        return <div>
                                <NavTravelArticle
                                    ImgSrc={Data.img}
                                    Title={Data.title}
                                    Date={Data.date}
                                    Comment={Data.comment}
                                /> 
                            </div>
                       })} 
                        </div>
                    </div>        
                </div>
            </div>
        </div>

    </li>
}

export default NavTravel;