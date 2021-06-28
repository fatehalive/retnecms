import {Link} from 'react-router-dom'
import CarouselVideo from './CarouselVideo'
import Data from './Data'
const NavVideo =()=>{
    return <li>
        <Link className="video" to="#">Video</Link>
        <div class="megadropdown">
				<div class="container">
					<div class="inner-megadropdown video-dropdown">
                        <div class="owl-wrapper">
							<h1>Latest Posts</h1>
							<div class="owl-carousel" data-num="4">
                                {Data.map((data)=>{
                                    return <div>
                                      <CarouselVideo
                                        title={data.title}
                                        date={data.date}
                                        ImgSrc={data.img}
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

export default NavVideo;