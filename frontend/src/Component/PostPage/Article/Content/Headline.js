import React from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

const Headline = ()=>{
  const {articleId} = useParams();
  const [headline, setHeadline] = React.useState({
    article_title: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. ', 
    createdAt: '27 may 2013', 
    username: 'John Doe',
    comments: 0,
    views: 872,
    imgCaption: 'Cras eget sem nec dui volutpat ultrices.'
  });

  React.useEffect(()=>{
    axios.get(`http://localhost:5000/news-article/${articleId}`)
      .then(res=>{
        const {data, message} = res.data;
        if(message === "Get Id News_Article Successfully"){
          setHeadline(data)
        }else{
          alert(message)
        }
      })
      .catch(err=> alert(err))
  }, [articleId]);

  return(
    <div className="title-post">
        <h1>{headline.article_title}</h1>
        <ul className="post-tags">
          <li><i className="fa fa-clock-o"></i>{headline.createdAt}</li>
          <li>
            <i className="fa fa-user"></i>by <Link to="#">{headline.username}</Link></li>
          <li><Link to="#"><i className="fa fa-comments-o"></i><span>{headline.comments}</span></Link></li>
          <li><i className="fa fa-eye"></i>{headline.views}</li>
        </ul>
      </div>
  )
}

export default Headline