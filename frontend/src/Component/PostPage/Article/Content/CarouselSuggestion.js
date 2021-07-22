import { Link } from 'react-router-dom'
import art3 from '../../../Upload/news-posts/art3.jpg'
import { Data1, Data2 } from './DataSuggestion'

const Suggestion = () =>{
  return <div className="carousel-box owl-wrapper">
      <div className="title-section">
        <h1><span>You may also like</span></h1>
      </div>
      <div className="owl-carousel" data-num="3">
        {Data1.map((data,index)=>{
          return <div className="item news-post image-post3" key={index}> 
            <img src={data.img} alt="" />
            <div className="hover-box">
              <h2><Link to="#">{data.title}</Link></h2>
              <ul className="post-tags">
                <li><i className="fa fa-clock-o"></i>27 May 2013</li>
              </ul>
            </div>
          </div>
        })}
        <div className="item news-post video-post">
          <img src={art3} alt=""/>
          <Link to="https://www.youtube.com/watch?v=LL59es7iy8Q" className="video-link"><i className="fa fa-play-circle-o"></i></Link>
          <div className="hover-box">
            <h2><Link to="#">Lorem ipsum dolor sit consectetuer adipiscing elit. Donec odio.</Link></h2>
          </div>
          <ul className="post-tags">
            <li><i className="fa fa-clock-o"></i>27 May 2013</li>
          </ul>
        </div>
        {Data2.map(data=>{
          return <div className="item news-post image-post3"> 
            <img src={data.img} alt="" />
            <div className="hover-box">
              <h2><Link to="#">{data.title}</Link></h2>
              <ul className="post-tags">
                <li><i className="fa fa-clock-o"></i>27 May 2013</li>
              </ul>
            </div>
          </div>
           })}
      </div>
  </div>
}

export default Suggestion