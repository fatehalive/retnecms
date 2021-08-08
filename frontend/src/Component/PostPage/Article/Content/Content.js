import React from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import image5 from '../../../Upload/news-posts/single5.jpg';
import image6 from '../../../Upload/news-posts/single6.jpg';

const Content=()=>{
  const {articleId} = useParams();
  const [content, setContent] = React.useState({
    image1_url: image5,
    image2_url: image6,
    article_summary: 'Ringkasan artikel belum terisi',
    tags: 'Tag belum diisi',
    article_content: 'Konten artikel belum terisi'
  });

  React.useEffect(()=>{
    axios.get(`http://localhost:5000/news-article/${articleId}`)
      .then(res=>{
        const {data, message} = res.data;
        if(message === "Get Id News_Article Successfully"){
          setContent(data);
        }else{
          alert(message)
        }
      })
      .catch(err=> alert(err))
  }, [articleId]);

  const parag = content.article_content.split('\n');
    
  return(
    <div>
      <div className="post-content">
        <p> <b>" {content.article_summary} "</b></p>
      </div>
      <br />
      <div className="post-gallery">
        <img src={content.image1_url} alt="" />
        <span className="image-caption">{content.imgCaption}</span>
      </div>
      <div className="post-content">
        {parag.map(p =>{
          return <p>{p}</p>
        })}
      </div>
      <div className="post-tags-box">
        <ul className="tags-box">
          <li><i className="fa fa-tags"></i><span>Tags:  {content.tags}</span></li>
        </ul>
      </div>
    </div>
  )
}


export default Content