import FeaturedPost from "./FeaturedPost/FeaturedPost"
import TabPosts from "./TabPosts/TabPosts"
import { Link } from "react-router-dom";
import { TagsList, Addsense } from "./TagAndAddData";

const Sidebar = () =>{
  return <div className="sidebar">
    <FeaturedPost />
    <TabPosts />
    {/* Subscribe */}
    <div className="widget subscribe-widget">
      <form className="subscribe-form"> 
        <h1>Subscribe to RSS Feeds</h1>
        <input type="text" name="sumbscribe" id="subscribe" placeholder="Email" />
				<button id="submit-subscribe">
					<i className="fa fa-arrow-circle-right"></i>
				</button>
				<p>Get all latest content delivered to your email a few times a month.</p>
      </form>
    </div>
    {/* Popular Tags */}
    <div className="widget tags-widget">
      <div className="title-section">
        <h1><span>Popular Tags</span></h1>
      </div>
      <ul className="tag-list">
        {TagsList.map(tag=>{
          return <li>
            <Link to="#">{tag}</Link>
          </li>
        })}
      </ul>
    </div>
    {/* Addsense */}
    <div className="advertisement">
      {Addsense.map(adds=>{
        return <div className={adds.device}>  
          <span>Advertisement</span>
          <img src={adds.img} alt=""/>
        </div>
      })}
    </div>
  </div>
}

export default Sidebar