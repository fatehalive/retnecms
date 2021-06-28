import {Link} from 'react-router-dom'
import ContentArticle from './ContentArticle';
import Suggestion from './CarouselSuggestion';

const ContentSec = (props)=>{
  const {title, info, imgCaption, tags} = props;
  return <div className="block-content">
    <div className="single-post-box">
      {/* Title */}
      <div className="title-post">
        <h1>{title}</h1>
        <ul className="post-tags">
          <li><i className="fa fa-clock-o"></i>{info.publishAt}</li>
          <li><i className="fa fa-user"></i>by <Link to="#">{info.writer}</Link></li>
          <li><Link to="#"><i className="fa fa-comments-o"></i><span>{info.comments}</span></Link></li>
          <li><i className="fa fa-eye"></i>{info.views}</li>
        </ul>
      </div>
      {/* Content */}
        {ContentArticle.map(contents =>{
          return <div>
          <div className="post-gallery">
            <img src={contents.src} alt="" />
            <span className="image-caption">{imgCaption}</span>
          </div>
          <div className="post-content">
            {contents.content.map((parag)=>{
              return <p>{parag}</p>
            })}
          </div>
        </div>
        })}
      {/* Tags */}
      <div className="post-tags-box">
        <ul className="tags-box">
          <li><i className="fa fa-tags"></i><span>Tags: </span></li>
          {tags.map((tag)=>{
            return <li><Link to="#">{tag}</Link></li>
          })}
        </ul>
      </div>
      {/* Suggestion */}
      <Suggestion />
    </div>
  </div>
}

export default ContentSec