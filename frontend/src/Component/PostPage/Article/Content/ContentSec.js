import {Link, useParams} from 'react-router-dom'
import ContentArticle from './ContentArticle';
import Suggestion from './CarouselSuggestion';
import axios from 'axios';
import React from 'react';

const ContentSec = (props)=>{
  const {articleId} = useParams();
  const [article, setArticle] = React.useState({
    article_title: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. ', 
    createdAt: '27 may 2013', 
    username: 'John Doe',
    comments: 0,
    views: 872,
    imgCaption: 'Cras eget sem nec dui volutpat ultrices.',
    tags: ['News', 'Fashion', 'Politics', 'Sport'],
    image1_url: 'null',
    image2_url: 'null',
    article_content: 'null'
  });

  React.useEffect(()=>{
    axios.get(`http://localhost:5000/news-article/${articleId}`)
      .then(res=>{
        const {data, message} = res.data;
        if(message === "Get Id News_Article Successfully"){
          setArticle(data)
        }else{
          alert(message)
        }
      })
      .catch(err=> alert(err))
  }, [articleId]);

  return (
  <div className="block-content">
    <div className="single-post-box">
      {/* Title */}
      <div className="title-post">
        <h1>{article.article_title}</h1>
        <ul className="post-tags">
          <li><i className="fa fa-clock-o"></i>{article.createdAt}</li>
          <li>
            <i className="fa fa-user"></i>by <Link to="#">{article.username}</Link></li>
          <li><Link to="#"><i className="fa fa-comments-o"></i><span>{article.comments}</span></Link></li>
          <li><i className="fa fa-eye"></i>{article.views}</li>
        </ul>
      </div>
      {/* Content */}
      <div>
        <div className="post-gallery">
          <img src={article.image1_url} alt="" />
            <span className="image-caption">{article.imgCaption}</span>
        </div>
        <div className="post-content">
          <p>{article.article_content}</p>
        </div>
      </div>
      {/* Tags */}
      {/* <div className="post-tags-box">
        <ul className="tags-box">
          <li><i className="fa fa-tags"></i><span>Tags: </span></li>
          {article.tags.map((tag)=>{
            return <li><Link to="#">{tag}</Link></li>
          })}
        </ul>
      </div> */}
      {/* Suggestion */}
      <Suggestion />
    </div>
  </div>
  )
}

export default ContentSec