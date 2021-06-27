import { Link } from "react-router-dom"
import { Popular, Recent } from "./DataTab"

const TabPosts = () =>{
  return <div className="widget tab-posts-widget">
    <ul className="nav nav-tabs">
      <li className="active">
        <Link to="#option1" data-toggle="tab">Popular</Link>
      </li>
      <li>
        <Link to="#option2" data-toggle="tab">Recent</Link>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active" id="option1"> 
        <ul className="list-posts">
          {Popular.map(posts=>{
            return<li>
              <img  src={posts.img} alt=""/>
              <div className="post-content">
                <h2><Link to="#">{posts.title}</Link></h2>
              </div>
              <ul className="post-tags">
                <li><i className="fa fa-clock-o"></i>28 May 2013</li>
              </ul>
            </li>
          })}
        </ul>
      </div>
      <div className="tab-pane" id="option2"> 
        <ul className="list-posts">
          {Recent.map(posts=>{
            return<li>
              <img  src={posts.img} alt=""/>
              <div className="post-content">
                <h2><Link to="#">{posts.title}</Link></h2>
              </div>
              <ul className="post-tags">
                <li><i className="fa fa-clock-o"></i>28 May 2013</li>
              </ul>
            </li>
          })}
        </ul>
      </div>
    </div>
  </div>
}

export default TabPosts