import Data from './Data'
import {Link} from 'react-router-dom'

const PostWidget = ()=>{
    return <div className="col-md-3">
            <div className="widget posts-widget">
                <h1>Random Post</h1>
                <ul className="list-posts">
                      {Data.map((data, index)=>{
                          return <li key={index}>
                                <img src={data.img} alt=""/>
                                <div className="post-content">
                                    <Link to="travel.html">{data.category}</Link>
                                    <h2><Link to="single-post.html">{data.title}</Link></h2>
                                    <ul className="post-tags">
                                        <li><i className="fa fa-clock-o"></i>{data.date}</li>
                                    </ul>
                                </div>
                      </li> 

                      })}
                    
                </ul>
            </div>

    </div>
}

export default PostWidget;