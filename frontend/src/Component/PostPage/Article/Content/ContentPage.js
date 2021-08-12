import Suggestion from './CarouselSuggestion';
import {Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { sentArticlePage } from "./redux/action";
import React, { useState } from 'react';
import Headline from './Headline';
import Content from './Content';

const ContentPage = ()=>{
  const {articleId} = useParams();
  const dispatch = useDispatch();
  const getArticlePage = useSelector(state=>state.articlePage);
  const {articlePage} = getArticlePage;
  const {data, message} = articlePage;
  console.log(data)

  React.useEffect(()=>{
    dispatch(sentArticlePage(articleId))
  }, [dispatch]);

 return (
  <div className="block-content">
    <div className="single-post-box">
      {/* Title */}
      <Headline data={data} />
      {/* Content */}
      <Content data={data} />
      {/* Suggestion */}
      <Suggestion />
    </div>
  </div>
  )
}

export default ContentPage