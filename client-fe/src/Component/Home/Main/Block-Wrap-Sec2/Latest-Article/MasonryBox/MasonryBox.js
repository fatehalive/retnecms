import {Link} from 'react-router-dom'
import Data from './data'
import img1 from '../../../../../Upload/news-posts/7.jpg'

const MasonryBox = ()=>{

    return  <div className="masonry-box">
                    <div className="title-section">
                        <h1><span>Latest Articles</span></h1>
                    </div>
                
                     <div className="latest-articles iso-call">
                            
                     <div div class="news-post standard-post3 default-size">
                                    <div class="post-gallery">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div class="post-title">
                                        <a class="category-post tech" href="tech.html">tech</a>
                                        <h2><Link to="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                        <ul class="post-tags">
                                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                            <li><i class="fa fa-user"></i>by <Link to="#">John Doe</Link></li>
                                            <li><Link to="#"><i class="fa fa-comments-o"></i><span>23</span></Link></li>
                                        </ul>
                                    </div>
                        </div>
                        {Data.map((data)=>{
                            return <div className="news-post standard-post3">
                                        <div className="post-gallery">
                                            <img src={data.img} alt=""/>
                                        </div>
                                        <div className="post-title">
                                            <Link className={data.categoryPost} to="tech.html">{data.category}</Link>
                                            <h2><Link to="single-post.html">{data.title} </Link></h2>
                                            <ul className="post-tags">
                                                <li><i className="fa fa-clock-o"></i>{data.date}</li>
                                                <li><i className="fa fa-user"></i>by <Link to="#">{data.user}</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments-o"></i><span>{data.comment}</span></Link></li>
                                            </ul>
                                        </div>
                                     </div>
                        })}
                           
                    </div>
            </div>
         
}

export default MasonryBox;