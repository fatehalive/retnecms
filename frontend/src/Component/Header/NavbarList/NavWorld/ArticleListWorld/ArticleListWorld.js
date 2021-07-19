import {Link} from 'react-router-dom'
import Data from '../../Data'

const ArticleListWorld = ()=>{
    return <div className="posts-filtered-block">
            <div className="owl-wrapper">
                <h1>Lifestyle</h1>
                <div className="owl-carousel" data-num="4">
                    {Data.map((Data)=>{
                        return <div className="item news-post standard-post">
						<div className="post-gallery">
							<img src={Data.img} alt=""/>
						</div>
						<div class="post-content">
                            <h2>
                                <Link to="/article">{Data.title}</Link>
                            </h2>
                            <ul className="post-tags">
                                <li><i className="fa fa-clock-o"></i>{Data.date}</li>
                                <li>
                                    <Link to="#">
                                        <i class="fa fa-comments-o"></i><span>{Data.comment}</span>
                                    </Link>
                                </li>
                            </ul>
					    </div>
					</div>
                    })}
                    
                </div>

            </div>
    </div>
}

export default ArticleListWorld;